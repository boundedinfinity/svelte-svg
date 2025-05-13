<script lang="ts">
    import type {
        CircleGeometry,
        RotationDirection,
        LineAttributes,
    } from "./types.js";
    import Line from "./Line.svelte";
    import { circleUtils } from "./circle.js";

    interface Props {
        circle: CircleGeometry;
        attrs?: Partial<LineAttributes>;
        theta?: number;
        direction?: RotationDirection;
        debug?: boolean;
    }

    let {
        circle,
        attrs = {},
        theta = 0,
        direction = "counter-clockwise",
        debug = false
    }: Props = $props();

    const line = circleUtils.lineToCircumference(circle, theta, direction);
</script>

<Line {line} {debug} attrs={{ ...attrs }} />
