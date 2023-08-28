import type {
    Point,
    Delta,
    CubicBezierAbs,
    CubicBezierRel,
    CubicBezierShortcutAbs,
    CubicBezierShortcutRel,
    QuadraticBezierAbs,
    QuadraticBezierRel,
    QuadraticBezierShortcutAbs,
    QuadraticBezierShortcutRel,
    ArcAbs,
    ArcRel
} from "./types.js";

// // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path
// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths

const m: { [symbol: string]: (x: any) => string } = {
    M: (o: Point) => `M ${o.x},${o.y}`,
    m: (o: Delta) => `m ${o.dx},${o.dy}`,
    L: (o: Point) => `L ${o.x},${o.y}`,
    l: (o: Delta) => `l ${o.dx},${o.dy}`,
    H: (x: number) => `H ${x}`,
    h: (dx: number) => `h ${dx}`,
    V: (y: number) => `V ${y}`,
    v: (dy: number) => `v ${dy}`,
    Z: () => `Z`,
    z: () => `z`,
    C: (o: CubicBezierAbs) =>
        `C ${o.c1.x},${o.c1.y}, ${o.c2.x},${o.c2.x} ${o.e.x},${o.e.y}`,
    c: (o: CubicBezierRel) =>
        `c ${o.c1.dx},${o.c1.dy}, ${o.c2.dx},${o.c2.dx} ${o.e.dx},${o.e.dy}`,
    S: (o: CubicBezierShortcutAbs) => `S ${o.c2.x},${o.c2.y} ${o.e.x},${o.e.y}`,
    s: (o: CubicBezierShortcutRel) => `S ${o.c2.dx},${o.c2.dx} ${o.e.dx},${o.e.dy}`,
    Q: (o: QuadraticBezierAbs) => `Q ${o.c1.x},${o.c1.x} ${o.e.x},${o.e.y}`,
    q: (o: QuadraticBezierRel) => `q ${o.c1.dx},${o.c1.dx} ${o.e.dx},${o.e.dy}`,
    T: (o: QuadraticBezierShortcutAbs) => `T ${o.e.x},${o.e.y}`,
    t: (o: QuadraticBezierShortcutRel) => `t ${o.e.dx},${o.e.dy}`,
    A: (o: ArcAbs) =>
        `A ${o.rx} ${o.ry} ${o.xAxisRotation} ${o.largeArcFlag} ${o.sweepFlag} ${o.e.x} ${o.e.y}`,
    a: (o: ArcRel) =>
        `a ${o.rx} ${o.ry} ${o.xAxisRotation} ${o.largeArcFlag} ${o.sweepFlag} ${o.e.dx} ${o.e.dy}`,
};

interface Command {
    options: any;
    fn: (o: any) => string;
}

export function pathBuilder(): PathBuilder {
    return new PathBuilder([])
}

export class PathBuilder {
    constructor(public commands: Command[]) {}

    build(): string {
        return this.commands.map((c) => c.fn(c.options)).join(" ");
    }

    private append(symbol: string, options?: any) {
        this.commands.push({ options: options, fn: m[symbol] });
    }

    M(point: Point): PathBuilder {
        this.append("M", point);
        return this;
    }

    m(delta: Delta): PathBuilder {
        this.append("m", delta);
        return this;
    }

    L(point: Point): PathBuilder {
        this.append("L", point);
        return this;
    }

    l(delta: Delta): PathBuilder {
        this.append("l", delta);
        return this;
    }

    H(x: number): PathBuilder {
        this.append("H", x);
        return this;
    }

    h(dx: number): PathBuilder {
        this.append("h", dx);
        return this;
    }

    V(y: number): PathBuilder {
        this.append("V", y);
        return this;
    }

    v(dy: number): PathBuilder {
        this.append("v", dy);
        return this;
    }

    Z(): PathBuilder {
        this.append("Z");
        return this;
    }

    z(): PathBuilder {
        this.append("z");
        return this;
    }

    C(options: CubicBezierAbs): PathBuilder {
        this.append("C", options);
        return this;
    }

    c(options: CubicBezierRel): PathBuilder {
        this.append("c", options);
        return this;
    }

    S(options: CubicBezierShortcutAbs): PathBuilder {
        this.append("C", options);
        return this;
    }

    s(options: CubicBezierShortcutRel): PathBuilder {
        this.append("c", options);
        return this;
    }

    Q(options: QuadraticBezierAbs): PathBuilder {
        this.append("C", options);
        return this;
    }

    q(options: QuadraticBezierRel): PathBuilder {
        this.append("c", options);
        return this;
    }

    T(options: QuadraticBezierShortcutAbs): PathBuilder {
        this.append("C", options);
        return this;
    }

    t(options: QuadraticBezierShortcutRel): PathBuilder {
        this.append("c", options);
        return this;
    }

    A(options: ArcAbs): PathBuilder {
        this.append("A", options);
        return this;
    }

    a(options: ArcRel): PathBuilder {
        this.append("a", options);
        return this;
    }
}
