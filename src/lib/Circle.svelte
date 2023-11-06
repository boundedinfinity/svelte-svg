<script lang="ts">
    import type {
        CircleAttributes,
        CircleGeometry,
        LineGeometry,
    } from "./index.js";
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
        const current = { ...start };
        const line: LineGeometry = {
            p1: start.c,
            p2: end.c,
        };

        // a * (1 - t) + b * t
        return function (t: number): CircleGeometry {
            const x = lineUtils.pointAlongLine(line,t * 100).y;
            const y = circleUtils.yCoordinate(current, x);
            current.c = { 
                x: current.c.x + x, 
                y: current.c.y + y, 
            };
            return current;
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
