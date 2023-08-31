<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { CircleGeometry } from "../types.js";

    export let circle: CircleGeometry;
</script>

<Polygon {circle} vertices={11} rotate={-90} />
