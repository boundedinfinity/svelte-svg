<script lang="ts">
    import type { LineDescriptor } from "./types.js";
    import LinePoint from "./LinePoint.svelte";
    import { linePoint } from "./line.js";

    export let line: LineDescriptor;
    export let strokeWidth = 3;
    export let debug = false;
</script>

<LinePoint {line} percentage={50} {strokeWidth} {debug} />
