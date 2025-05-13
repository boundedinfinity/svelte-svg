<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { DodecagonGeometry } from "../types.js";

    interface Props {
        dodecagon: DodecagonGeometry;
    }

    let { dodecagon }: Props = $props();
</script>

<Polygon polygon={dodecagon} vertices={12} rotate={-90} />
