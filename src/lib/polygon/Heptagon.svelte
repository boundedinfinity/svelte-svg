<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { HeptagonGeometry } from "../types.js";

    interface Props {
        heptagon: HeptagonGeometry;
    }

    let { heptagon }: Props = $props();
</script>

<Polygon polygon={heptagon} vertices={7} rotate={-90} />
