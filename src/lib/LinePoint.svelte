<script lang="ts">
    import type { LineGeometry, PointAttributes } from "./types.js";
    import Point from "./Point.svelte";
    import { lineUtils } from "./line.js";

    interface Props {
        line: LineGeometry;
        percentage?: number;
        attrs?: Partial<PointAttributes>;
        debug?: boolean;
    }

    let {
        line,
        percentage = 5,
        attrs = {},
        debug = false
    }: Props = $props();

    const point = lineUtils.pointAlongLine(line, percentage);
</script>

<Point {point} {debug} {...attrs} />
