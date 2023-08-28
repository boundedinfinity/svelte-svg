<script lang="ts">
    import Circle from "./Circle.svelte";
    import type { CircleDescriptor, Point } from "./types.js";
    import { percentageInc } from "./util.js";

    export let point: Point;
    export let strokeWidth: number = 1;
    export let offset: number = 0.05;
    export let debug = false;

    const circle: CircleDescriptor = {
        c: point,
        r: percentageInc(strokeWidth, offset),
    };

    if (debug) console.log(point);
</script>

<Circle {circle} {debug} style="--fill: black;" />
