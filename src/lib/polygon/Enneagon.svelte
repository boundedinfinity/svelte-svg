<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { EnnecagonGeometry } from "../types.js";

    interface Props {
        enneagon: EnnecagonGeometry;
    }

    let { enneagon }: Props = $props();
</script>

<Polygon polygon={enneagon} vertices={9} rotate={-90} />
