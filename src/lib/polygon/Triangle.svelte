<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { TriangleGeometry } from "../types.js";

    interface Props {
        triangle: TriangleGeometry;
    }

    let { triangle }: Props = $props();
</script>

<Polygon polygon={triangle} vertices={3} rotate={-90} />
