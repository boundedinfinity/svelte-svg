<script lang="ts">
    import type { LineDescriptor } from "./types.js";
    import LinePoint from "./LinePoint.svelte";

    export let line: LineDescriptor;
    export let debug = false;
</script>

<LinePoint {line} percentage={50} {debug} />
