<script lang="ts">
    import type { LineGeometry } from "./index.js";
    import { DEFAULT_LINE_STROKE_WIDTH } from "./line.js";

    export let line: LineGeometry;
    export let style: string = "";
    export let debug = false;

    if (debug) console.log(line);
</script>

<line
    x1={line.p1.x}
    y1={line.p1.y}
    x2={line.p2.x}
    y2={line.p2.y}
    stroke-width={line.stroke || DEFAULT_LINE_STROKE_WIDTH}
    {style}
/>

<style>
    line {
        fill: var(--fill, none);
        fill-opacity: var(--fill-opacity, 1);
        display: var(--display, inline);
        visibility: var(--visibility, visible);

        stroke: var(--stroke, black);
        stroke-width: var(--stroke-width, DEFAULT_LINE_STROKE_WIDTH);
        stroke-opacity: var(--stroke-opacity, 1);
        stroke-dasharray: var(--stroke-dasharray, 0);
        stroke-dashoffset: var(--stroke-dashoffset, none);
        stroke-linecap: var(--stroke-linecap, butt);
        stroke-linejoin: var(--stroke-linejoin, miter);
        stroke-miterlimit: var(--stroke-miterlimit, 4);
    }
</style>
