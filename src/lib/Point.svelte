<script lang="ts">
    import Circle from "./Circle.svelte";
    import type { CircleDescriptor, Point } from "./types.js";
    import { percentageInc, addStyle } from "./util.js";
    import { DEFAULT_CIRCLE_STROKE_WIDTH } from "./point.js";

    export let point: Point;
    export let offset: number = 0.05;
    export let debug = false;

    const strokeWidth = point.stroke || DEFAULT_CIRCLE_STROKE_WIDTH;

    const circle: CircleDescriptor = {
        c: point,
        r: percentageInc(strokeWidth, offset),
    };

    const style = addStyle("", "fill", "black")

    if (debug) console.log(point);
</script>

<Circle {circle} {debug} {style} />
