<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { TriangleGeometry } from "../types.js";

    export let triangle: TriangleGeometry;
</script>

<Polygon polygon={triangle} vertices={3} rotate={-90} />
