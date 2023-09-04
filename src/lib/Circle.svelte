<script lang="ts">
    import type { CircleAttributes, CircleGeometry } from "./index.js";
    import { CIRCLE_DEFAULTS } from "./circle.js";
    import { styles } from "./util.js";

    export let circle: CircleGeometry;
    export let attrs: CircleAttributes = CIRCLE_DEFAULTS;
    export let debug: boolean = false;

    const style = styles({
        ...CIRCLE_DEFAULTS,
        ...circle.attrs,
        ...attrs,
    });

    if (debug) console.log(circle);
    if (debug) console.log({
        ...CIRCLE_DEFAULTS,
        ...circle.attrs,
        ...attrs,
    });
</script>

<circle cx={circle.c.x} cy={circle.c.y} r={circle.r} {style} />

<style>
    circle {
        fill: var(--fill, none);
        fill-opacity: var(--fill-opacity, 1);
        display: var(--display, inline);
        visibility: var(--visibility, visible);

        stroke: var(--stroke, black);
        stroke-width: var(--stroke-width, 3);
        stroke-opacity: var(--stroke-opacity, 1);
        stroke-dasharray: var(--stroke-dasharray, 0);
        stroke-dashoffset: var(--stroke-dashoffset, none);
        stroke-linecap: var(--stroke-linecap, butt);
        stroke-linejoin: var(--stroke-linejoin, miter);
        stroke-miterlimit: var(--stroke-miterlimit, 4);
    }
</style>
