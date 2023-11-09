<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { SquareGeometry } from "../types.js";

    export let square: SquareGeometry;
</script>

<Polygon polygon={square} vertices={4} rotate={-45} />
