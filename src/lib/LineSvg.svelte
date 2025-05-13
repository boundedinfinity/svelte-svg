<script lang="ts">
    import type { LineGeometry, LineAttributes } from "./types.js";
    import { Line } from "./index.js";
    import { lineUtils } from "./line.js";
    import { utils } from "./util.js";


    const viewBox = lineUtils.viewBox(line);
    interface Props {
        line: LineGeometry;
        debug?: boolean;
        attrs?: Partial<LineAttributes>;
    }

    let { line, debug = false, attrs = {} }: Props = $props();

    if (debug) console.log(viewBox);
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width={viewBox.width}
    height={viewBox.height}
    viewBox={utils.viewBoxToString(viewBox)}
>
    <Line {line} {...attrs} />
</svg>
