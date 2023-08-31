<script lang="ts">
    import type { LineGeometry } from "./types.js";
    import Point from "./Point.svelte";
    import { linePoint } from "./line.js";

    export let line: LineGeometry;
    export let percentage = 5;
    export let style: string = "";
    export let debug: boolean = false;

    const point = linePoint(line, percentage);
</script>

<Point {point} {debug} {style} />
