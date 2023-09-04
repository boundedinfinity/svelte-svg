<script lang="ts">
    import type { CircleGeometry, RotationDirection, LineAttributes} from "./types.js";
    import Line from "./Line.svelte";
    import { circleCircumferenceLine } from "./circle.js";
    import { LINE_DEFAULTS } from "./line.js";

    export let circle: CircleGeometry;
    export let attrs = LINE_DEFAULTS;
    export let theta = 0;
    export let direction: RotationDirection = "counter-clockwise"
    export let debug: boolean = false;

    const line = circleCircumferenceLine(circle, theta, direction);
</script>

<Line {line} {debug} {attrs} />
