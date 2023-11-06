<script lang="ts">
    import type { LineGeometry, PointAttributes } from "./types.js";
    import LinePoint from "./LinePoint.svelte";

    export let line: LineGeometry;
    export let attrs: Partial<PointAttributes> = {};
    export let debug: boolean = false;
</script>

<LinePoint {line} percentage={50} {debug} {...attrs} />
