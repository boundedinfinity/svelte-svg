<script lang="ts">
    import {
        Circle,
        CircleSvg,
        CircleRadiusLine,
        CircleCircumPoint,
        CircleRadiusSlice,
        circleUtils,
        CircleTween,
        aniUtils,
    } from "$lib/index.js";

    import type { CircleGeometry } from "$lib/index.js";

    const svgAttrs = {
        width: 600,
        height: 600,
        viewBox: "0 0 600 600",
        xmlns: "http://www.w3.org/2000/svg",
        // preserveAspectRatio: "xMidYMid meet",
    };
    const debug = true;
    
    const c1: CircleGeometry = { c: { x: 150, y: 150 }, r: 100 };
    const c2: CircleGeometry = circleUtils.translate(c1, { dx: 150, dy: 150 });
    const c3: CircleGeometry = circleUtils.translate(c2, { dx: 150, dy: 150 });
    const c4: CircleGeometry = circleUtils.translate(c3, { dx: -150, dy: -150 });

    const a1: CircleGeometry = { c: { x: 150, y: 150 }, r: 50 };
    const a2 = circleUtils.translate(a1, { dx: 100, dy: 100 });
    const a3 = circleUtils.translate(a2, { dx: 100 });

    const stepper = aniUtils.tweens.circle([c1, c2, c3, c4]);
</script>

<main>
    <section>
        <h2>Circle Animated</h2>
        <div>
            <svg {...svgAttrs}>
                <CircleTween
                    circle={stepper}
                    attrs={{ fill: "green", fillOpacity: "20%" }}
                />
            </svg>
        </div>
        <button on:click={stepper.next}>Next</button>
        <button on:click={stepper.prev}>Prev</button>
    </section>

    <section>
        <h2>Circle + CircleRadiusLine</h2>
        <div>
            <svg {...svgAttrs}>
                <Circle
                    circle={c1}
                    attrs={{ fill: "green", fillOpacity: "20%" }}
                />
                <CircleRadiusLine
                    circle={c1}
                    attrs={{ stroke: "blue", strokeOpacity: "50%" }}
                />
                <CircleRadiusLine
                    circle={c1}
                    theta={90}
                    attrs={{ stroke: "red", strokeOpacity: "50%" }}
                />
            </svg>
        </div>
    </section>

    <section>
        <h2>Circle + CircleCircumPoint</h2>
        <div>
            <svg {...svgAttrs}>
                <Circle circle={c2} />
                <CircleCircumPoint
                    circle={c2}
                    attrs={{ fill: "red", stroke: "red" }}
                />
                <CircleCircumPoint
                    circle={c2}
                    theta={90}
                    attrs={{ fill: "red", stroke: "red" }}
                />
            </svg>
        </div>
    </section>

    <section>
        <h2>Circle + CircleRadiusSlice</h2>
        <div>
            <svg {...svgAttrs}>
                <Circle circle={c3} />
                <CircleRadiusSlice
                    circle={c3}
                    theta1={90}
                    theta2={0}
                    attrs={{ fill: "blue" }}
                />

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

    <section>
        <h2>CircleSvg</h2>
        <div>
            <CircleSvg
                {debug}
                r={300}
                attrs={{
                    strokeWidth: 5,
                    fillOpacity: 0.5,
                    stroke: "darkgreen",
                    fill: "lightgreen",
                }}
            />
        </div>
    </section>
</main>

<style>
    main {
        display: grid;
        justify-content: center;
        align-content: center;
        /* width: 95vw;
        height: 95vh; */
    }

    svg {
        transform: scaleY(-1);
    }

    div {
        width: fit-content;
        border: 1px solid red;
    }
</style>
