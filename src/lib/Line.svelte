<script lang="ts">
    import type { LineDescriptor } from "./types.js";

    export let line: LineDescriptor;
    export let debug = false;

    if (debug) console.log(line);
</script>

<line x1={line.p1.x} y1={line.p1.y} x2={line.p2.x} y2={line.p2.y} />

<style>
    line {
        stroke: var(--stroke, black);
        stroke-width: var(--stroke-width, 3);
        stroke-linecap: var(--stroke-linecap, round);
    }
</style>
