<script lang="ts">
    import { Line, LineSvg, LinePoint, LineMidPoint } from "$lib/index.js";
    import type { LineGeometry } from "$lib/types.js";
    const debug = true;

    const l1: LineGeometry = { p1: { x: 20, y: 20 }, p2: { x: 70, y: 70 } };
    const l2: LineGeometry = { p1: { x: 70, y: 20 }, p2: { x: 20, y: 70 } };
</script>

<main>
    <section>
        <h2>LineSvg</h2>
        <div>
            <LineSvg {debug} {...l1} />
        </div>
    </section>
    <section>
        <h2>Line</h2>
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={300}
                viewBox="0 0 {200} {300}"
            >
                <Line line={l1} />
                <Line line={l2} />
                <LinePoint line={l1} percentage={30} />
                <LineMidPoint line={l1} />
                <LinePoint line={l1} percentage={65} />
            </svg>
        </div>
    </section>
</main>

<style>
    main {
        display: grid;
        justify-content: center;
        align-content: center;
        width: 95vw;
        height: 95vh;
    }
    div {
        width: fit-content;
        height: fit-content;
        border: 1px solid red;
    }
</style>
