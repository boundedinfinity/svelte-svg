<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { HendecagonGeometry } from "../types.js";

    export let hendecagon: HendecagonGeometry;
</script>

<Polygon polygon={hendecagon} vertices={11} rotate={-90} />
