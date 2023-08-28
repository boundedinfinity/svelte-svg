<script lang="ts">
    import type { CircleDescriptor } from "../types.js";
    import { polygonVertices } from "./polygon.js";

    export let circle: CircleDescriptor;
    export let vertices: number;
    export let rotate: number = 0;

    const points = polygonVertices(circle, vertices).map(p => `${p.x},${p.y}`).join(" ");
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
