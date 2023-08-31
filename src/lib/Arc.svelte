<script lang="ts">
    import Point from "./Point.svelte";
    import { pathBuilder } from "./path.js";

    export let style: string = "";
    export let debug: boolean = false;

    const path = pathBuilder()
            .M({ x: 80, y: 80 })
            .A({
                    rx: 50,
                    ry: 50,
                    xAxisRotation: 0,
                    largeArcFlag: 0,
                    sweepFlag: 0,
                    e: { x: 125, y: 125 },
                })
            .L({x: 125, y: 80})
            .Z()
        .build();

    if (debug) console.log(path);
</script>

<!-- <Point point={{ x: 80, y: 80 }} /> -->
<Point point={{ x: 125, y: 125 }} {style} />
<!-- <Point point={{x: 125, y: 80}} /> -->

<path
    d={`${path}`}
    fill="green"
    stroke="black"
    stroke-width="3"
/>
