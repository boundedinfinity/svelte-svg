<script lang="ts">
    import type { CircleGeometry, RotationDirection } from "./types.js";
    import Line from "./Line.svelte";
    import { circleCircumferenceLine } from "./circle.js";

    export let circle: CircleGeometry;
    export let theta = 0;
    export let direction: RotationDirection = "counter-clockwise"
    export let style: string = "";
    export let debug: boolean = false;

    const line = circleCircumferenceLine(circle, theta, direction);
</script>

<Line {line} {debug} {style} />
