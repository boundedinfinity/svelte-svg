<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { OctagonGeometry } from "../types.js";

    interface Props {
        octagon: OctagonGeometry;
    }

    let { octagon }: Props = $props();
</script>

<Polygon polygon={octagon} vertices={8} rotate={-90} />
