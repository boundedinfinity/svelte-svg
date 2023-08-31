<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { CircleGeometry } from "../types.js";

    export let circle: CircleGeometry;
</script>

<Polygon {circle} vertices={3} rotate={-90} />
