<script lang="ts">
    import type { CircleDescriptor } from "./types.js";

    export let circle: CircleDescriptor;
    export let debug = false;

    if (debug) console.log(circle);
</script>

<circle cx={circle.c.x} cy={circle.c.y} r={circle.r} />

<style>
    circle {
        stroke: var(--stroke, black);
        fill: var(--fill, none);
        stroke-width: var(--stroke-width, 3);
    }
</style>
