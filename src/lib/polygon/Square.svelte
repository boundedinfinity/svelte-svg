<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { SquareGeometry } from "../types.js";

    interface Props {
        square: SquareGeometry;
    }

    let { square }: Props = $props();
</script>

<Polygon polygon={square} vertices={4} rotate={-45} />
