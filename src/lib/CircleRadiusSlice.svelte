<script lang="ts">
    import type { CircleGeometry } from "./types.js";
    import {
        circleCircumferencePoint,
        DEFAULT_CIRCLE_STROKE_WIDTH,
    } from "./circle.js";
    import { pathBuilder } from "./path.js";
    import { debugDump } from "./util.js";

    export let circle: CircleGeometry;
    export let theta1 = 0;
    export let theta2 = 90;
    export let style: string = "";
    export let debug: boolean = false;

    const p1 = circleCircumferencePoint(circle, theta1);
    const p2 = circleCircumferencePoint(circle, theta2);
    const largeArcFlag = Math.abs(theta1 - theta2) < 180 ? 0 : 1;
    const sweepFlag = theta1 < theta2 ? 0 : 1;

    const d = pathBuilder()
        .M(p1)
        .A({
            rx: circle.r,
            ry: circle.r,
            xAxisRotation: 0,
            largeArcFlag,
            sweepFlag,
            e: p2,
        })
        .L(circle.c)
        .Z()
        .build();

    debugDump(debug, d);
</script>

<path {d} {style} stroke-width={DEFAULT_CIRCLE_STROKE_WIDTH} />

<style>
    path {
        stroke: var(--stroke, black);
        stroke-linecap: var(--stroke-linecap, round);
        fill: var(--fill, grey);
        fill-opacity: var(--fill-opacity, 100%);
    }
</style>
