<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { PentagonGeometry } from "../types.js";

    export let pentagon: PentagonGeometry;
</script>

<Polygon polygon={pentagon} vertices={5} rotate={-90} />
