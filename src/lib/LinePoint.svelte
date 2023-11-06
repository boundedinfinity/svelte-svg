<script lang="ts">
    import type { LineGeometry, PointAttributes } from "./types.js";
    import Point from "./Point.svelte";
    import { lineUtils } from "./line.js";

    export let line: LineGeometry;
    export let percentage = 5;
    export let attrs: Partial<PointAttributes> = {};
    export let debug: boolean = false;

    const point = lineUtils.pointAlongLine(line, percentage);
</script>

<Point {point} {debug} {...attrs} />
