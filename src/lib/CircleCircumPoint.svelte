<script lang="ts">
    import type {
        CircleGeometry,
        RotationDirection,
        PointAttributes,
    } from "./types.js";
    import Point from "./Point.svelte";
    import { circleUtils } from "./circle.js";

    export let circle: CircleGeometry;
    export let theta = 0;
    export let direction: RotationDirection = "counter-clockwise";
    export let attrs: Partial<PointAttributes> = {};
    export let debug: boolean = false;

    const point = circleUtils.pointOnCircumference(circle, theta, direction);
</script>

<Point {point} {debug} {...attrs} />
