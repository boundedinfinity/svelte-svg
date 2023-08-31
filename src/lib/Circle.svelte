<script lang="ts">
    import type { CircleGeometry } from "./index.js";
    import { DEFAULT_CIRCLE_STROKE_WIDTH } from "./circle.js";

    export let circle: CircleGeometry;
    export let style: string = "";
    export let debug: boolean = false;

    if (debug) console.log(circle);
</script>

<circle
    cx={circle.c.x}
    cy={circle.c.y}
    r={circle.r}
    stroke-width={circle.stroke || DEFAULT_CIRCLE_STROKE_WIDTH}
    {style}
/>

<style>
    circle {
        fill: var(--fill, none);
        fill-opacity: var(--fill-opacity, 1);
        display: var(--display, inline);
        visibility: var(--visibility, visible);

        stroke: var(--stroke, black);
        stroke-opacity: var(--stroke-opacity, 1);
        stroke-dasharray: var(--stroke-dasharray, 0);
        stroke-dashoffset: var(--stroke-dashoffset, none);
        stroke-linecap: var(--stroke-linecap, butt);
        stroke-linejoin: var(--stroke-linejoin, miter);
        stroke-miterlimit: var(--stroke-miterlimit, 4);
    }
</style>
