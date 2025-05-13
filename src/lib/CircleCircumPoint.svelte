<script lang="ts">
    import type {
        CircleGeometry,
        RotationDirection,
        PointAttributes,
    } from "./types.js";
    import Point from "./Point.svelte";
    import { circleUtils } from "./circle.js";

    interface Props {
        circle: CircleGeometry;
        theta?: number;
        direction?: RotationDirection;
        attrs?: Partial<PointAttributes>;
        debug?: boolean;
    }

    let {
        circle,
        theta = 0,
        direction = "counter-clockwise",
        attrs = {},
        debug = false
    }: Props = $props();

    const point = circleUtils.pointOnCircumference(circle, theta, direction);
</script>

<Point {point} {debug} attrs={{...attrs}} />
