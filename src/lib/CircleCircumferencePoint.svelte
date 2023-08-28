<script lang="ts">
    import type { CircleDescriptor } from "./types.js";
    import Point from "./Point.svelte";
    import { circleCircumferencePoint } from "./circle.js";

    export let circle: CircleDescriptor;
    export let strokeWidth = 3;
    export let theta = 0;
    export let debug = false;

    const point = circleCircumferencePoint(circle, theta);
</script>

<Point {point} {strokeWidth} {debug} />
