<script lang="ts">
    import {
        Circle,
        CircleSvg,
        CircleRadiusLine,
        CircleCircumPoint,
        CircleRadiusSlice,
        circleUtils,
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
    const r = 100;

    const c1: CircleGeometry = { c: { x: 150, y: 150 }, r };
    const c2: CircleGeometry = { c: { x: 450, y: 150 }, r };

    const c3: CircleGeometry = { c: { x: 450, y: 150 }, r };
    const c4: CircleGeometry = { c: { x: 150, y: 150 }, r };

    const a1: CircleGeometry = { c: { x: 150, y: 150 }, r: 50 };
    const a2 = circleUtils.translate(a1, { dx: 100, dy: 100 });
    const a3 = circleUtils.translate(a2, { dx: 100 });
</script>

<main>
    <section>
        <h2>Circle Animated</h2>
        <div>
            <svg {...svgAttrs}>
                <Circle
                    circle={a1}
                    attrs={{ fill: "green", fillOpacity: "20%" }}
                    animation={[a2, a3]}
                />
            </svg>
        </div>
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
