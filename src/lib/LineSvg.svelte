<script lang="ts">
    import { Line } from "./index.js";
    import { lineViewBox } from "./line.js";
    import { viewBoxToString } from "./util.js";
    import type { LineDescriptor, Point } from "./types.js";

    export let p1: Point;
    export let p2: Point;
    export let strokeWidth = 3;
    export let debug = false;

    const line: LineDescriptor = { p1, p2 }
    const viewBox = lineViewBox({ p1, p2 }, strokeWidth);

    if (debug) console.log(viewBox);
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width={viewBox.width}
    height={viewBox.height}
    viewBox={viewBoxToString(viewBox)}
>
    <Line {line} --stroke-width={strokeWidth} --stroke="black" />
</svg>
