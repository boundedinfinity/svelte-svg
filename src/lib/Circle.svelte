<script lang="ts">
    import type { CircleDescriptor } from "./types.js";
    import {addStyle} from './util.js'

    export let circle: CircleDescriptor;
    export let debug = false;
    export let style = "";

    let rstyle = addStyle(style, 'stork-width', circle.stroke)

    if (debug) console.log(circle);
    if (debug) console.log(rstyle);
</script>

<circle cx={circle.c.x} cy={circle.c.y} r={circle.r} style={rstyle} />

<style>
    circle {
        stroke: var(--stroke, black);
        fill: var(--fill, none);
        stroke-width: var(--stroke-width, 3);
    }
</style>
