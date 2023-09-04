<script lang="ts">
    import Circle from "./Circle.svelte";
    import type { CircleGeometry, PointGeometry } from "./types.js";
    import { percentageInc, debugDump } from "./util.js";
    import { POINT_DEFAULTS } from "./point.js";

    export let point: PointGeometry;
    export let attrs = POINT_DEFAULTS;
    export let offset: number = 0.05;
    export let debug: boolean = false;

    const strokeWidth =
        attrs.strokeWidth ||
        point.attrs?.strokeWidth ||
        POINT_DEFAULTS.strokeWidth!;

    const circle: CircleGeometry = {
        c: point,
        r: percentageInc(strokeWidth, offset),
    };

    debugDump(debug, point);
</script>

<Circle {circle} {debug} {attrs} />
