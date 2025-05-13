<script lang="ts">
    import type {
        CircleAttributes,
        CircleGeometry,
        StepTweened,
    } from "./types.js";
    import { CIRCLE_DEFAULTS } from "./circle.js";
    import { utils } from "./util.js";

    interface Props {
        circle: StepTweened<CircleGeometry>;
        attrs?: Partial<CircleAttributes>;
        debug?: boolean;
    }

    let { circle, attrs = {}, debug = false }: Props = $props();

    let cattrs = $derived({
        ...CIRCLE_DEFAULTS,
        ...$circle.attrs,
        ...attrs,
    });
    let style = $derived(utils.styles(cattrs));

    let svgPath: SVGPathElement = $state();
</script>

<g>
    <path bind:this={svgPath} />
</g>

<circle cx={$circle.c.x} cy={$circle.c.y} r={$circle.r} {style} />

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
