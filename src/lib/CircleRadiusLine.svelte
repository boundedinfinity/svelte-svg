<script lang="ts">
    import type { CircleDescriptor, RotationDirection } from "./types.js";
    import Line from "./Line.svelte";
    import { circleCircumferenceLine } from "./circle.js";

    export let circle: CircleDescriptor;
    export let theta = 0;
    export let direction: RotationDirection = "counter-clockwise"
    export let debug = false;

    const line = circleCircumferenceLine(circle, theta, direction);
</script>

<Line {line} {debug} />
