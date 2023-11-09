<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { HeptagonGeometry } from "../types.js";

    export let heptagon: HeptagonGeometry;
</script>

<Polygon polygon={heptagon} vertices={7} rotate={-90} />
