<script lang="ts">
    import { Circle } from "./index.js";
    import type { CircleAttributes } from "./types.js";
    import { circleUtils } from "./circle.js";
    import { utils } from "./util.js";

    interface Props {
        r?: number;
        attrs?: Partial<CircleAttributes>;
        debug?: boolean;
    }

    let { r = 10, attrs = {}, debug = false }: Props = $props();

    const circle = { c: { x: 0, y: 0 }, r };
    const viewBox = circleUtils.viewBox(circle);

    utils.debugDump(debug, viewBox);
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width={viewBox.width}
    height={viewBox.height}
    viewBox={utils.viewBoxToString(viewBox)}
>
    <Circle {circle} attrs={{...attrs}} {debug} />
</svg>
