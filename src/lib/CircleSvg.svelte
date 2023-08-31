<script lang="ts">
    import { Circle } from "./index.js";
    import { circleViewBox, DEFAULT_CIRCLE_STROKE_WIDTH } from "./circle.js";
    import { viewBoxToString } from "./util.js";

    export let r: number = 10;
    export let stroke: number = DEFAULT_CIRCLE_STROKE_WIDTH;
    export let style: string = "";
    export let debug: boolean = false;

    const circle = { c: { x: 0, y: 0 }, r, stroke };
    const viewBox = circleViewBox(circle);

    if (debug) console.log(viewBox);
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width={viewBox.width}
    height={viewBox.height}
    viewBox={viewBoxToString(viewBox)}
>
    <Circle {circle} {style} />
</svg>
