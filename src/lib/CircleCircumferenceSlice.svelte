<script lang="ts">
    import type { CircleDescriptor } from "./types.js";
    import Line from "./Line.svelte";
    import { circleCircumferenceLine } from "./circle.js";

    export let circle: CircleDescriptor;
    export let theta1 = 0;
    export let theta2 = 90;
    export let debug = false;

    const line1 = circleCircumferenceLine(circle, theta1);
    const line2 = circleCircumferenceLine(circle, theta2);
</script>

<Line line={line1} {debug} />
<Line line={line2} {debug} />
