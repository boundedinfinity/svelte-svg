<script lang="ts">
    import type { LineGeometry, LineAttributes } from "./types.js";
    import { Line } from "./index.js";
    import { lineUtils } from "./line.js";
    import { viewBoxToString } from "./util.js";

    export let line: LineGeometry;
    export let debug = false;

    const viewBox = lineUtils.viewBox(line);
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
