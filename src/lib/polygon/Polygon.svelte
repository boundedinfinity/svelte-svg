<script lang="ts">
    import type { PolygonGeometry } from "../types.js";
    import { polygonUtils } from "./polygon.js";

    interface Props {
        polygon: PolygonGeometry;
        vertices: number;
        rotate?: number;
    }

    let { polygon, vertices, rotate = 0 }: Props = $props();

    const points = polygonUtils
        .vertices(polygon, vertices)
        .map((p) => `${p.x},${p.y}`)
        .join(" ");
</script>

<polygon {points} transform="rotate({rotate}, {polygon.c.x}, {polygon.c.y})" />

<style>
    polygon {
        stroke: var(--stroke, black);
        fill: var(--fill, none);
        stroke-width: var(--stroke-width, 3);
        stroke-linecap: var(--stroke-linecap, round);
        stroke-linejoin: var(--stroke-linejoin, round);
    }
</style>
