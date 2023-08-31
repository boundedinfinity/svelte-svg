<script lang="ts">
    import {
        Circle,
        CircleSvg,
        CircleRadiusLine,
        CircleCircumPoint,
        CircleRadiusSlice,
    } from "$lib/index.js";
    import type { CircleGeometry } from "$lib/index.js";
    const debug = true;

    const c1: CircleGeometry = { c: { x: 45, y: 45 }, r: 30 };
    const c2: CircleGeometry = { c: { x: 150, y: 150 }, r: 30 };
    const c3: CircleGeometry = { c: { x: 45, y: 150 }, r: 30 };
    const c4: CircleGeometry = { c: { x: 45, y: 250 }, r: 40 };
</script>

<main>
    <section>
        <h2>CircleSvg</h2>
        <div>
            <CircleSvg {debug} r={100} stroke={5} />
        </div>
    </section>
    <section>
        <h2>Circle</h2>
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={300}
                viewBox="0 0 {200} {300}"
            >
                <Circle
                    circle={c1}
                    --stroke="green"
                    --stroke-dasharray="10 3"
                    --stroke-opacity="15%"
                />
                <CircleRadiusLine circle={c1} --stroke-opacity="15%" />
                <CircleRadiusLine
                    circle={c1}
                    theta={90}
                    --stroke-opacity="15%"
                />

                <Circle circle={c2} />
                <CircleCircumPoint circle={c2} />
                <CircleCircumPoint circle={c2} theta={90} />

                <Circle circle={c3} />
                <CircleRadiusSlice circle={c3} theta1={90} theta2={0} />

                <Circle circle={c4} />
                <CircleRadiusSlice
                    circle={c4}
                    theta1={0}
                    theta2={90}
                    --fill="red"
                />
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
        border: 1px solid red;
    }
</style>
