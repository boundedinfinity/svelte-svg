<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { DecagonGeometry } from "../types.js";

    export let decagon: DecagonGeometry;
</script>

<Polygon polygon={decagon} vertices={10} rotate={-90} />
