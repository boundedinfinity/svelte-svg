<script lang="ts">
    import Polygon from "./Polygon.svelte";
    import type { CircleDescriptor } from "../types.js";

    export let circle: CircleDescriptor;
</script>

<Polygon {circle} vertices={3} rotate={-90} />
