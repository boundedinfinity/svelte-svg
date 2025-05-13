<script lang="ts">
    import type { LineGeometry, PointAttributes } from "./types.js";
    import LinePoint from "./LinePoint.svelte";

    interface Props {
        line: LineGeometry;
        attrs?: Partial<PointAttributes>;
        debug?: boolean;
    }

    let { line, attrs = {}, debug = false }: Props = $props();
</script>

<LinePoint {line} percentage={50} {debug} {...attrs} />
