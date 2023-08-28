<script lang="ts">
    import { Line, LineSvg, LinePoint, LineMidPoint } from "$lib/index.js";
    import type { LineDescriptor } from "$lib/types.js";
    const debug = true;

    const l1: LineDescriptor = { p1: { x: 0, y: 0 }, p2: { x: 200, y: 200 } };
    const l2: LineDescriptor = { p1: { x: 200, y: 0 }, p2: { x: 0, y: 200 } };
</script>

<main>
    <section>
        <h2>LineSvg</h2>
        <div>
            <LineSvg {debug} {...l1} strokeWidth={10} />
        </div>
    </section>
    <section>
        <h2>Line</h2>
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={200}
                viewBox="0 0 {200} {200}"
            >
                <Line line={l1} />
                <Line line={l2} />
                <LinePoint line={l1} percentage={25} />
                <LineMidPoint line={l1} />
                <LinePoint line={l1} percentage={75} />
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
