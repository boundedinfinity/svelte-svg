<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { OctagonGeometry } from "../types.js";

    export let octagon: OctagonGeometry;
</script>

<Polygon polygon={octagon} vertices={8} rotate={-90} />
