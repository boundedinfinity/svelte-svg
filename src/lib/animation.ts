import type { CircleGeometry, LineGeometry } from "./types.js";
import { circleUtils } from "./circle.js";
import { lineUtils } from "./line.js";
import { interpolate as d3interpolate } from "d3-interpolate";

type InterpolateDirection = "upper" | "lower";
const line = d3interpolate;

function svgPath(
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
            const el = get();
            const length = el.getTotalLength();
            const percent = t * length;
            const point = el.getPointAtLength(percent);
            const next: CircleGeometry = { ...start };
            next.c = { x: point.x, y: point.y };
            return next;
        };
    };
}

function circle(
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
}

export const interpolaters = {
    circle,
    line,
    svgPath,
};
