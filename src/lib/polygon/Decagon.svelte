<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { DecagonGeometry } from "../types.js";

    interface Props {
        decagon: DecagonGeometry;
    }

    let { decagon }: Props = $props();
</script>

<Polygon polygon={decagon} vertices={10} rotate={-90} />
