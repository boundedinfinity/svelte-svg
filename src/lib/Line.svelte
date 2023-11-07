<script lang="ts">
    import type { LineGeometry, LineAttributes } from "./types.js";
    import { LINE_DEFAULTS } from "./line.js";
    import { utils } from "./util.js";

    export let line: LineGeometry;
    export let attrs: Partial<LineAttributes> = {};
    export let debug: boolean = false;

    const style = utils.styles({
        ...LINE_DEFAULTS,
        ...line.attrs,
        ...attrs,
    });

    if (debug) console.log(line);
</script>

<line x1={line.a.x} y1={line.a.y} x2={line.b.x} y2={line.b.y} {style} />

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
