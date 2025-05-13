<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { PentagonGeometry } from "../types.js";

    interface Props {
        pentagon: PentagonGeometry;
    }

    let { pentagon }: Props = $props();
</script>

<Polygon polygon={pentagon} vertices={5} rotate={-90} />
