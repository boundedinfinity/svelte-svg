<script lang="ts">
    import { Line, LineSvg, LinePoint, LineMidPoint } from "$lib/index.js";
    import type { LineGeometry } from "$lib/types.js";
    const debug = true;
    const svgAttrs = { width: 300, height: 200, viewBox: "0 0 {300} {200}" };

    const l1: LineGeometry = { a: { x: 20, y: 20 }, b: { x: 150, y: 150 } };
    const l2: LineGeometry = { a: { x: 70, y: 20 }, b: { x: 20, y: 70 } };
</script>

<main>
    <section>
        <h2>LineSvg</h2>
        <div>
            <LineSvg {debug} line={l1} />
        </div>
    </section>
    <section>
        <h2>Line + LineMidPoint</h2>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" {...svgAttrs}>
                <Line line={l1} />
                <LineMidPoint {debug} line={l1} />
            </svg>
        </div>
    </section>
    <section>
        <h2>Line + LinePoint</h2>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" {...svgAttrs}>
                <Line line={l1} />
                <LinePoint line={l1} percentage={0} />
                <LinePoint line={l1} percentage={50} />
                <LinePoint line={l1} percentage={100} />
            </svg>
        </div>
    </section>

    <section>
        <h2>Line + LinePoint</h2>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" {...svgAttrs}>
                <Line line={l1} />
                <LinePoint line={l1} percentage={0} />
                <LinePoint line={l1} percentage={50} />
                <LinePoint line={l1} percentage={100} />
            </svg>
        </div>
    </section>
</main>

<style>
    main {
        display: grid;
        justify-content: center;
        align-content: center;
    }
    div {
        width: fit-content;
        height: fit-content;
        border: 1px solid red;
    }
</style>
