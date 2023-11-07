<script lang="ts">
    import type {
        CircleAttributes,
        CircleGeometry,
        LineGeometry,
    } from "./types.js";

    import { CIRCLE_DEFAULTS, circleUtils } from "./circle.js";
    import { lineUtils } from "./line.js";
    import { styles } from "./util.js";
    import { tweened, type TweenedOptions } from "svelte/motion";
    import { interpolate, interpolateRound } from "d3-interpolate";
    import { bounceInOut, cubicInOut, sineInOut } from "svelte/easing";
    import { onMount } from "svelte";

    interface Animation {
        circle: CircleGeometry;
        options: TweenedOptions<CircleGeometry>;
    }

    function arc(
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
            const y = circleUtils.yCoordinate(arc, x)[0];
            next.c = { x, y };
            return next;
        };
    }

    export let circle: CircleGeometry;
    export let attrs: Partial<CircleAttributes> = CIRCLE_DEFAULTS;
    export let debug: boolean = false;
    export let animation: CircleGeometry[] = [];

    const tween = tweened<CircleGeometry>(circle, {
        duration: 2000,
        interpolate: arc,
        easing: cubicInOut,
    });

    onMount(async () => {
        for (let i = 0; i < animation.length; i++) {
            await tween.update((prev) => animation[i]);
        }
    });

    const style = styles({
        ...CIRCLE_DEFAULTS,
        ...circle.attrs,
        ...attrs,
    });

    if (debug) console.log(circle);
    if (debug)
        console.log({
            ...CIRCLE_DEFAULTS,
            ...circle.attrs,
            ...attrs,
        });
</script>

<circle cx={$tween.c.x} cy={$tween.c.y} r={$tween.r} {style} />

<style>
    circle {
        fill: var(--fill, none);
        fill-opacity: var(--fill-opacity, 1);
        display: var(--display, inline);
        visibility: var(--visibility, visible);

        stroke: var(--stroke, black);
        stroke-width: var(--stroke-width, 3);
        stroke-opacity: var(--stroke-opacity, 1);
        stroke-dasharray: var(--stroke-dasharray, 0);
        stroke-dashoffset: var(--stroke-dashoffset, none);
        stroke-linecap: var(--stroke-linecap, butt);
        stroke-linejoin: var(--stroke-linejoin, miter);
        stroke-miterlimit: var(--stroke-miterlimit, 4);
    }
</style>
