<script lang="ts">
    import Circle from "./Circle.svelte";
    import type {
        CircleGeometry,
        PointGeometry,
        PointAttributes,
    } from "./types.js";
    import { utils } from "./util.js";
    import { POINT_DEFAULTS } from "./point.js";

    interface Props {
        point: PointGeometry;
        attrs?: Partial<PointAttributes>;
        offset?: number;
        debug?: boolean;
    }

    let {
        point,
        attrs = {},
        offset = 0.05,
        debug = false
    }: Props = $props();

    const cattrs: PointAttributes = {
        ...POINT_DEFAULTS,
        ...point.attrs,
        ...attrs,
    };

    const circle: CircleGeometry = {
        c: point,
        r: utils.percentage.incBy(cattrs.strokeWidth, offset),
    };

    utils.debugDump(debug, point);
</script>

<Circle {circle} {debug} attrs={{ ...cattrs }} />
