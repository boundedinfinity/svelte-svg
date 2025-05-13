<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { HexagonGeometry } from "../types.js";

    interface Props {
        hexagon: HexagonGeometry;
    }

    let { hexagon }: Props = $props();
</script>

<Polygon polygon={hexagon} vertices={6} rotate={-90} />
