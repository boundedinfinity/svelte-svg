<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { HexagonGeometry } from "../types.js";

    export let hexagon: HexagonGeometry;
</script>

<Polygon polygon={hexagon} vertices={6} rotate={-90} />
