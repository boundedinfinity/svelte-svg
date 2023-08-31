<script lang="ts">
    import { Line } from "./index.js";
    import { lineViewBox } from "./line.js";
    import { viewBoxToString, addStyle } from "./util.js";
    import type { LineGeometry, PointGeometry } from "./types.js";

    export let p1: PointGeometry;
    export let p2: PointGeometry;
    export let debug = false;

    const line: LineGeometry = { p1, p2 };
    const viewBox = lineViewBox({ p1, p2 });
    const style = addStyle("", "fill", "black");

    if (debug) console.log(viewBox);
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width={viewBox.width}
    height={viewBox.height}
    viewBox={viewBoxToString(viewBox)}
>
    <Line {line} {style} />
</svg>
