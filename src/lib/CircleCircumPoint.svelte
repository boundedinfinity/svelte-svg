<script lang="ts">
    import type { CircleGeometry, RotationDirection } from "./types.js";
    import Point from "./Point.svelte";
    import { circleCircumferencePoint } from "./circle.js";

    export let circle: CircleGeometry;
    export let theta = 0;
    export let direction: RotationDirection = "counter-clockwise"
    export let style: string = "";
    export let debug: boolean = false;

    const point = circleCircumferencePoint(circle, theta, direction);
</script>

<Point {point} {debug} {style} />
