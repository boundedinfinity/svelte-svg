<script lang="ts">
    import { Circle } from "./index.js";
    import { circleViewBox, CIRCLE_DEFAULTS } from "./circle.js";
    import { viewBoxToString, debugDump } from "./util.js";

    export let r: number = 10;
    export let attrs = CIRCLE_DEFAULTS;
    export let debug: boolean = false;

    const circle = { c: { x: 0, y: 0 }, r };
    const viewBox = circleViewBox(circle);

    debugDump(debug, viewBox);
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width={viewBox.width}
    height={viewBox.height}
    viewBox={viewBoxToString(viewBox)}
>
    <Circle {circle} {attrs} {debug} />
</svg>
