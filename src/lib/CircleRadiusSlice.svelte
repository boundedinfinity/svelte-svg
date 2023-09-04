<script lang="ts">
    import type { CircleGeometry, CircleAttributes } from "./types.js";
    import { circleCircumferencePoint, CIRCLE_DEFAULTS } from "./circle.js";
    import { pathBuilder } from "./path.js";
    import { debugDump, styles } from "./util.js";

    export let circle: CircleGeometry;
    export let attrs: CircleAttributes = CIRCLE_DEFAULTS;
    export let theta1 = 0;
    export let theta2 = 90;
    export let debug: boolean = false;

    const p1 = circleCircumferencePoint(circle, theta1);
    const p2 = circleCircumferencePoint(circle, theta2);
    const largeArcFlag = Math.abs(theta1 - theta2) < 180 ? 0 : 1;
    const sweepFlag = theta1 < theta2 ? 0 : 1;

    const style = styles({
        ...CIRCLE_DEFAULTS,
        ...circle.attrs,
        ...attrs,
    });

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

<path {d} {style} />

<style>
    path {
        stroke: var(--stroke-width, black);
        stroke-linecap: var(--stroke-linecap, round);
        fill: var(--fill, grey);
        fill-opacity: var(--fill-opacity, 100%);
    }
</style>
