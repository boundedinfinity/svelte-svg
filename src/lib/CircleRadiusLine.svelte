<script lang="ts">
    import type {
        CircleGeometry,
        RotationDirection,
        LineAttributes,
    } from "./types.js";
    import Line from "./Line.svelte";
    import { circleUtils } from "./circle.js";

    export let circle: CircleGeometry;
    export let attrs: Partial<LineAttributes> = {};
    export let theta = 0;
    export let direction: RotationDirection = "counter-clockwise";
    export let debug: boolean = false;

    const line = circleUtils.lineToCircumference(circle, theta, direction);
</script>

<Line {line} {debug} {...attrs} />
