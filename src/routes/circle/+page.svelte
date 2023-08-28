<script lang="ts">
    import {
        Circle,
        CircleSvg,
        CircleCircumferenceLine,
        CircleCircumferencePoint,
        CircleCircumferenceSlice,
        Arc,
    } from "$lib/index.js";
    import type { CircleDescriptor } from "$lib/types.js";
    const debug = true;

    const c1: CircleDescriptor = { c: { x: 45, y: 45 }, r: 30 };
    const c2: CircleDescriptor = { c: { x: 150, y: 150 }, r: 30 };
    const c3: CircleDescriptor = { c: { x: 45, y: 150 }, r: 30 };
</script>

<main>
    <section>
        <h2>CircleSvg</h2>
        <div>
            <CircleSvg {debug} r={100} />
        </div>
    </section>
    <section>
        <h2>Circle</h2>
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={200}
                viewBox="0 0 {200} {200}"
            >
                <Circle circle={c1} />
                <CircleCircumferenceLine circle={c1} />
                <CircleCircumferenceLine circle={c1} theta={90} />

                <Circle circle={c2} />
                <CircleCircumferencePoint circle={c2} />
                <CircleCircumferencePoint circle={c2} theta={90} />

                <Circle circle={c3} />
                <CircleCircumferenceSlice circle={c3} />
                <CircleCircumferenceSlice
                    circle={c3}
                    theta1={160}
                    theta2={190}
                />
                
                <Arc {debug} />

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
