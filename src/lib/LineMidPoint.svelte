<script lang="ts">
    import type { LineGeometry } from "./types.js";
    import LinePoint from "./LinePoint.svelte";

    export let line: LineGeometry;
    export let debug = false;
</script>

<LinePoint {line} percentage={50} {debug} />
