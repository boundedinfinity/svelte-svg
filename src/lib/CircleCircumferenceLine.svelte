<script lang="ts">
    import type { CircleDescriptor } from "./types.js";
    import Line from "./Line.svelte";
    import { circleCircumferenceLine } from "./circle.js";

    export let circle: CircleDescriptor;
    export let theta = 0;
    export let debug = false;

    const line = circleCircumferenceLine(circle, theta);
</script>

<Line {line} {debug} />
