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
    const r = 100
    
    const c1: CircleGeometry = { c: { x: 150, y: 150 }, r };
    const c2: CircleGeometry = { c: { x: 450, y: 450 }, r };

    const c3: CircleGeometry = { c: { x: 450, y: 150 }, r };
    const c4: CircleGeometry = { c: { x: 150, y: 450 }, r };
</script>

<main>
    <section>
        <h2>CircleSvg</h2>
        <div>
            <CircleSvg
                {debug}
                r={300}
                attrs={{ strokeWidth: 5, fillOpacity: 0.5, stroke: 'darkgreen', fill: 'lightgreen' }}
            />
        </div>
    </section>
    <section>
        <h2>Circle</h2>
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={600}
                height={600}
                viewBox="0 0 {600} {600}"
            >
                <Circle
                    circle={c1}
                    attrs={{ fill: "green", fillOpacity: "20%" }}
                />
                <CircleRadiusLine
                    circle={c1}
                    attrs={{ stroke: 'blue', strokeOpacity: "50%" }}
                />
                <CircleRadiusLine
                    circle={c1}
                    theta={90}
                    attrs={{ stroke: 'red', strokeOpacity: "50%" }}
                />

                <Circle circle={c2} />
                <CircleCircumPoint circle={c2} attrs={{ fill: "red", stroke: 'red'  }} />
                <CircleCircumPoint circle={c2} theta={90} attrs={{ fill: "red", stroke: 'red' }} />

                <Circle circle={c3} />
                <CircleRadiusSlice circle={c3} theta1={90} theta2={0} />

                <Circle circle={c4} />
                <CircleRadiusSlice
                    circle={c4}
                    theta1={0}
                    theta2={90}
                    attrs={{ fill: "red" }}
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
