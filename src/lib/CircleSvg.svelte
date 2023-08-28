<script lang="ts">
    import { Circle } from "./index.js";
    import { circleViewBox } from "./circle.js";
    import { viewBoxToString } from "./util.js";

    export let r: number = 10;
    export let strokeWidth = 3;
    export let debug = false;

    const circle = { c: { x: 0, y: 0 }, r };
    const viewBox = circleViewBox(circle, strokeWidth);

    if (debug) console.log(viewBox);
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width={viewBox.width}
    height={viewBox.height}
    viewBox={viewBoxToString(viewBox)}
>
    <Circle {circle} --stroke-width={strokeWidth} />
</svg>
