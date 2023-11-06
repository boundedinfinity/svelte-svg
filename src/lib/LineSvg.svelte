<script lang="ts">
    import type {
        LineGeometry,
        LineAttributes,
        PointGeometry,
    } from "./types.js";
    import { Line } from "./index.js";
    import { lineUtils } from "./line.js";
    import { viewBoxToString } from "./util.js";

    export let p1: PointGeometry;
    export let p2: PointGeometry;
    export let debug = false;

    const line: LineGeometry = { p1, p2 };
    const viewBox = lineUtils.viewBox({ p1, p2 });
    export let attrs: Partial<LineAttributes> = {};

    if (debug) console.log(viewBox);
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width={viewBox.width}
    height={viewBox.height}
    viewBox={viewBoxToString(viewBox)}
>
    <Line {line} {...attrs} />
</svg>
