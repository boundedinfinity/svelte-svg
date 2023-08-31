<script lang="ts">
    import Circle from "./Circle.svelte";
    import type { CircleGeometry, PointGeometry } from "./types.js";
    import { percentageInc, debugDump } from "./util.js";
    import { DEFAULT_CIRCLE_STROKE_WIDTH } from "./point.js";

    export let point: PointGeometry;
    export let offset: number = 0.05;
    export let style: string = "";
    export let debug = false;

    const strokeWidth = point.stroke || DEFAULT_CIRCLE_STROKE_WIDTH;

    const circle: CircleGeometry = {
        c: point,
        r: percentageInc(strokeWidth, offset),
    };

    debugDump(debug, point)
</script>

<Circle {circle} {debug} {style} --fill="black" />
