<script lang="ts">
    import type { CircleAttributes, CircleGeometry } from "./types.js";
    import { CIRCLE_DEFAULTS } from "./circle.js";
    import { utils } from "./util.js";

    interface Props {
        circle: CircleGeometry;
        attrs?: Partial<CircleAttributes>;
        debug?: boolean;
    }

    let { circle, attrs = {}, debug = false }: Props = $props();

    const cattrs: CircleAttributes = {
        ...CIRCLE_DEFAULTS,
        ...circle.attrs,
        ...attrs,
    };

    const style = utils.styles(cattrs);

    if (debug) console.log(circle);
    if (debug) console.log(cattrs);
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
