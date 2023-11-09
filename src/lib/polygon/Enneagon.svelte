<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { EnnecagonGeometry } from "../types.js";

    export let enneagon: EnnecagonGeometry;
</script>

<Polygon polygon={enneagon} vertices={9} rotate={-90} />
