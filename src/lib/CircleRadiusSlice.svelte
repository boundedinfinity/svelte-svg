<script lang="ts">
    import type { CircleGeometry, CircleAttributes } from "./types.js";
    import { circleUtils, CIRCLE_DEFAULTS } from "./circle.js";
    import { pathBuilder } from "./path.js";
    import { utils } from "./util.js";

    interface Props {
        circle: CircleGeometry;
        attrs?: Partial<CircleAttributes>;
        theta1?: number;
        theta2?: number;
        debug?: boolean;
    }

    let {
        circle,
        attrs = {},
        theta1 = 0,
        theta2 = 90,
        debug = false
    }: Props = $props();

    const p1 = circleUtils.pointOnCircumference(circle, theta1);
    const p2 = circleUtils.pointOnCircumference(circle, theta2);
    const largeArcFlag = Math.abs(theta1 - theta2) < 180 ? 0 : 1;
    const sweepFlag = theta1 < theta2 ? 0 : 1;

    const style = utils.styles({
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

    utils.debugDump(debug, d);
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
