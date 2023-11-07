<script lang="ts">
    
    import { Point, Triangle, Square, Pentagon, Hexagon, Octagon, Enneagon, Decagon, Dodecagon } from "$lib/index.js";
    import type { LineGeometry, CircleGeometry } from "$lib/types.js";
    const debug = true;

    const l1: LineGeometry = { a: { x: 20, y: 20 }, b: { x: 70, y: 70 } };
    const l2: LineGeometry = { a: { x: 70, y: 20 }, b: { x: 20, y: 70 } };
    
    const r = 25
    
    const circle3: CircleGeometry = { c: { x: 50, y: 50 }, r };
    const circle4: CircleGeometry = { c: { x: 50, y: 100 }, r };
    const circle5: CircleGeometry = { c: { x: 50, y: 150 }, r };
    const circle6: CircleGeometry = { c: { x: 50, y: 200 }, r };
    const circle7: CircleGeometry = { c: { x: 50, y: 250 }, r };
    const circle8: CircleGeometry = { c: { x: 150, y: 50 }, r };
    const circle9: CircleGeometry = { c: { x: 150, y: 100 }, r };
    const circle10: CircleGeometry = { c: { x: 150, y: 150 }, r };
    const circle11: CircleGeometry = { c: { x: 150, y: 200 }, r };
    const circle12: CircleGeometry = { c: { x: 150, y: 250 }, r };
</script>

<main>
    <section>
        <h2>Line</h2>
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={300}
                viewBox="0 0 {200} {300}"
            >
                <Triangle circle={circle3} />
                <Point point={circle3.c} />

                <Square circle={circle4} />
                <Point point={circle4.c} />

                <Pentagon circle={circle5} />
                <Point point={circle5.c} />

                <Hexagon circle={circle6} />
                <Point point={circle6.c} />

                <Octagon circle={circle8} />
                <Point point={circle8.c} />

                <Enneagon circle={circle9} />
                <Point point={circle9.c} />

                <Decagon circle={circle10} />
                <Point point={circle10.c} />

                <Dodecagon circle={circle12} />
                <Point point={circle12.c} />
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
