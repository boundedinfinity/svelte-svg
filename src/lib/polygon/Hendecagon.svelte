<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { HendecagonGeometry } from "../types.js";

    interface Props {
        hendecagon: HendecagonGeometry;
    }

    let { hendecagon }: Props = $props();
</script>

<Polygon polygon={hendecagon} vertices={11} rotate={-90} />
