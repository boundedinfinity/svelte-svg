<script lang="ts">
    import Circle from "./Circle.svelte";
    import type {
        CircleGeometry,
        PointGeometry,
        PointAttributes,
    } from "./types.js";
    import { utils } from "./util.js";
    import { POINT_DEFAULTS } from "./point.js";

    export let point: PointGeometry;
    export let attrs: Partial<PointAttributes> = {};
    export let offset: number = 0.05;
    export let debug: boolean = false;

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
