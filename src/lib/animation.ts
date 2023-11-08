import type { CircleGeometry, LineGeometry, StepTweened } from "./types.js";
import { circleUtils } from "./circle.js";
import { lineUtils } from "./line.js";
import { utils } from "./util.js";
import { interpolate as d3interpolate } from "d3-interpolate";
import { tweened, type TweenedOptions, type Tweened } from "svelte/motion";
import { cubicInOut } from "svelte/easing";
import { pathBuilder } from "./path.js";

type InterpolateDirection = "upper" | "lower";

const DEFUALT_TWEEN_OPTIONS: TweenedOptions<any> = {
    duration: 2000,
    interpolate: d3interpolate,
    easing: cubicInOut,
};

const interpolaters = {
    circle: function (
        direction: InterpolateDirection = "upper"
    ): (
        start: CircleGeometry,
        end: CircleGeometry
    ) => (t: number) => CircleGeometry {
        return function (
            start: CircleGeometry,
            end: CircleGeometry
        ): (t: number) => CircleGeometry {
            const diameter: LineGeometry = { a: start.c, b: end.c };
            const midpoint = lineUtils.midPoint(diameter);
            const arc: CircleGeometry = {
                c: midpoint,
                r: lineUtils.length(diameter) / 2,
            };

            return function (t: number): CircleGeometry {
                const next: CircleGeometry = { ...start };
                const x = lineUtils.pointAlongLine(diameter, t * 100).x;
                const r = circleUtils.yCoordinate(arc, x);
                const y = direction == "upper" ? r[0] : r[1];
                next.c = { x, y };
                return next;
            };
        };
    },
    line: d3interpolate,
    svgPath: function (
        path: string
    ): (
        start: CircleGeometry,
        end: CircleGeometry
    ) => (t: number) => CircleGeometry {
        const el: SVGPathElement = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        el.setAttribute("d", path);
        return function (
            start: CircleGeometry,
            end: CircleGeometry
        ): (t: number) => CircleGeometry {
            return function (t: number): CircleGeometry {
                const l = el.getTotalLength();
                const per = utils.percentage.of1(l, t);
                const p = el.getPointAtLength(per);
                console.log(l, t, p);
                const next: CircleGeometry = { ...start };
                next.c = { x: p.x, y: p.y };
                return next;
            };
        };
    },
    svgPathEl: function (
        get: () => SVGPathElement
    ): (
        start: CircleGeometry,
        end: CircleGeometry
    ) => (t: number) => CircleGeometry {
        return function (
            start: CircleGeometry,
            end: CircleGeometry
        ): (t: number) => CircleGeometry {
            return function (t: number): CircleGeometry {
                const l = get().getTotalLength();
                const per = utils.percentage.of1(l, t);
                const p = get().getPointAtLength(per);
                console.log(l, t, p);
                const next: CircleGeometry = { ...start };
                next.c = { x: p.x, y: p.y };
                return next;
            };
        };
    },
};

export const aniUtils = {
    tweens: {
        path: function (
            circles: CircleGeometry[],
            defaults?: TweenedOptions<CircleGeometry>
        ) {
            let current = 0;
            const b = pathBuilder()

            for(let i = 0; i < circles.length; i++) {
                if(i === 0) {
                    b.M(circles[i].c)
                } else {
                    b.L(circles[i].c)
                }
            }

            const { update, subscribe } = tweened<CircleGeometry>(
                circles[current],
                {
                    ...DEFUALT_TWEEN_OPTIONS,
                    ...defaults,
                    interpolate: interpolaters.svgPath(b.build()),
                }
            );

            function values(): CircleGeometry[] {
                return circles;
            }

            function next(): Promise<void> {
                if (current + 1 < circles.length) current++;
                console.log(current);
                return update(() => circles[current]);
            }

            function prev(): Promise<void> {
                if (current - 1 >= 0) current--;
                console.log(current);
                return update(() => circles[current]);
            }

            return {
                subscribe,
                next,
                prev,
                values,
            } as StepTweened<CircleGeometry>;
        },
        circle: function (
            circles: CircleGeometry[],
            defaults?: TweenedOptions<CircleGeometry>
        ) {
            let current = 0;

            const { update, subscribe } = tweened<CircleGeometry>(
                circles[current],
                { ...DEFUALT_TWEEN_OPTIONS, ...defaults }
            );

            function values(): CircleGeometry[] {
                return circles;
            }

            function next(): Promise<void> {
                if (current + 1 < circles.length) current++;
                console.log(current);
                return update(() => circles[current]);
            }

            function prev(): Promise<void> {
                if (current - 1 >= 0) current--;
                console.log(current);
                return update(() => circles[current]);
            }

            return {
                subscribe,
                next,
                prev,
                values,
            } as StepTweened<CircleGeometry>;
        },
    },
};
