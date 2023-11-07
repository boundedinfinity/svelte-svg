<script lang="ts">
    import type { CircleGeometry } from "../types.js";
    import { polygonUtils } from "./polygon.js";

    export let circle: CircleGeometry;
    export let vertices: number;
    export let rotate: number = 0;

    const points = polygonUtils.vertices(circle, vertices).map(p => `${p.x},${p.y}`).join(" ");
</script>

<polygon {points} transform="rotate({rotate}, {circle.c.x}, {circle.c.y})" />

<style>
    polygon {
        stroke: var(--stroke, black);
        fill: var(--fill, none);
        stroke-width: var(--stroke-width, 3);
        stroke-linecap: var(--stroke-linecap, round);
        stroke-linejoin: var(--stroke-linejoin, round);
    }
</style>
