<script lang="ts">
    import type { CircleAttributes, CircleGeometry } from "./types.js";

    import { CIRCLE_DEFAULTS } from "./circle.js";
    import { interpolaters } from "./animation.js";
    import { pathBuilder } from "./path.js";
    import { utils } from "./util.js";
    import { tweened, type TweenedOptions } from "svelte/motion";
    import { bounceInOut, cubicInOut, sineInOut } from "svelte/easing";
    import { onMount } from "svelte";

    interface Animation {
        circle: CircleGeometry;
        options: TweenedOptions<CircleGeometry>;
    }

    export let circle: CircleGeometry;
    export let attrs: Partial<CircleAttributes> = {};
    export let debug: boolean = false;
    export let animation: CircleGeometry[] = [];

    const cattrs:CircleAttributes = {
        ...CIRCLE_DEFAULTS,
        ...circle.attrs,
        ...attrs
    }

    const d = pathBuilder().M(circle.c).m({ dx: 10 }).m({ dy: 10 }).build();
    let svgPath: SVGPathElement;

    const tween = tweened<CircleGeometry>(circle);

    onMount(async () => {
        // tween.update((prev) => prev, {
        //     duration: 2000,
        //     // interpolate: interpolaters.svgPath(() => svgPath),
        //     easing: cubicInOut,
        // });
        // for (let i = 0; i < animation.length; i++) {
        //     await tween.update((prev) => animation[i]);
        // }
    });

    const style = utils.styles(cattrs);

    if (debug) console.log(circle);
    if (debug)
        console.log({
            // ...CIRCLE_DEFAULTS,
            // ...circle.attrs,
            // ...attrs,
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
