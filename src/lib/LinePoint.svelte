<script lang="ts">
    import type { LineDescriptor } from "./types.js";
    import Point from "./Point.svelte";
    import { linePoint } from "./line.js";

    export let line: LineDescriptor;
    export let percentage = 5;
    export let debug = false;

    const point = linePoint(line, percentage);
</script>

<Point {point} {debug} />
