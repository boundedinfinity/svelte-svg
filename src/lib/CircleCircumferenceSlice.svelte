<script lang="ts">
    import type { CircleDescriptor } from "./types.js";
    import { circleCircumferencePoint } from "./circle.js";
    import { pathBuilder } from "./path.js";

    export let circle: CircleDescriptor;
    export let theta1 = 0;
    export let theta2 = 90;
    export let debug = false;

    const p1 = circleCircumferencePoint(circle, theta1);
    const p2 = circleCircumferencePoint(circle, theta2);
    const largeArcFlag = Math.abs(theta1 - theta2) < 180 ? 0 : 1

    const path = pathBuilder()
            .M(p1)
            .A({
                    rx: circle.r,
                    ry: circle.r,
                    xAxisRotation: 0,
                    largeArcFlag,
                    sweepFlag: 0,
                    e: p2,
                })
            .L(circle.c)
            .Z()
        .build();

    if (debug) console.log(path);
</script>

<path
    d={`${path}`}
    fill="green"
    stroke="black"
    stroke-width="3"
/>
