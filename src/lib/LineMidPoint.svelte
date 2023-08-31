<script lang="ts">
    import type { LineGeometry } from "./types.js";
    import LinePoint from "./LinePoint.svelte";

    export let line: LineGeometry;
    export let style: string = "";
    export let debug: boolean = false;
</script>

<LinePoint {line} percentage={50} {debug} {style} />
