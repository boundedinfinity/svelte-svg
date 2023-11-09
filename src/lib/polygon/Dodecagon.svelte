<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { DodecagonGeometry } from "../types.js";

    export let dodecagon: DodecagonGeometry;
</script>

<Polygon polygon={dodecagon} vertices={12} rotate={-90} />
