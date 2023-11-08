import type {
    PointGeometry,
    DeltaGeometry,
    CubicBezierAbsGeometry,
    CubicBezierRelGeometry,
    CubicBezierShortcutAbsGeometry,
    CubicBezierShortcutRelGeometry,
    QuadraticBezierAbsGeometry,
    QuadraticBezierRelGeometry,
    QuadraticBezierShortcutAbsGeometry,
    QuadraticBezierShortcutRelGeometry,
    ArcAbsGeometry,
    ArcRelGeometry,
} from "./types.js";

import { pointUtils } from "./point.js";

// // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path
// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths

const m: { [symbol: string]: (x: any) => string } = {
    M: (o: PointGeometry) => `M ${o.x},${o.y}`,
    m: (o: DeltaGeometry) => `m ${o.dx},${o.dy}`,
    L: (o: PointGeometry) => `L ${o.x},${o.y}`,
    l: (o: DeltaGeometry) => `l ${o.dx},${o.dy}`,
    H: (x: number) => `H ${x}`,
    h: (dx: number) => `h ${dx}`,
    V: (y: number) => `V ${y}`,
    v: (dy: number) => `v ${dy}`,
    Z: () => `Z`,
    z: () => `z`,
    C: (o: CubicBezierAbsGeometry) =>
        `C ${o.c1.x},${o.c1.y}, ${o.c2.x},${o.c2.x} ${o.e.x},${o.e.y}`,
    c: (o: CubicBezierRelGeometry) =>
        `c ${o.c1.dx},${o.c1.dy}, ${o.c2.dx},${o.c2.dx} ${o.e.dx},${o.e.dy}`,
    S: (o: CubicBezierShortcutAbsGeometry) =>
        `S ${o.c2.x},${o.c2.y} ${o.e.x},${o.e.y}`,
    s: (o: CubicBezierShortcutRelGeometry) =>
        `S ${o.c2.dx},${o.c2.dx} ${o.e.dx},${o.e.dy}`,
    Q: (o: QuadraticBezierAbsGeometry) =>
        `Q ${o.c1.x},${o.c1.x} ${o.e.x},${o.e.y}`,
    q: (o: QuadraticBezierRelGeometry) =>
        `q ${o.c1.dx},${o.c1.dx} ${o.e.dx},${o.e.dy}`,
    T: (o: QuadraticBezierShortcutAbsGeometry) => `T ${o.e.x},${o.e.y}`,
    t: (o: QuadraticBezierShortcutRelGeometry) => `t ${o.e.dx},${o.e.dy}`,
    A: (o: ArcAbsGeometry) =>
        `A ${o.rx} ${o.ry} ${o.xAxisRotation} ${o.largeArcFlag} ${o.sweepFlag} ${o.e.x} ${o.e.y}`,
    a: (o: ArcRelGeometry) =>
        `a ${o.rx} ${o.ry} ${o.xAxisRotation} ${o.largeArcFlag} ${o.sweepFlag} ${o.e.dx} ${o.e.dy}`,
};

interface Command {
    options: any;
    fn: (o: any) => string;
}

export function pathBuilder(): PathBuilder {
    return new PathBuilder([]);
}

class PathBuilder {
    constructor(public commands: Command[]) {}

    build(): string {
        return this.commands.map((c) => c.fn(c.options)).join(" ");
    }

    private append(symbol: string, options?: any) {
        this.commands.push({ options: options, fn: m[symbol] });
    }

    // move absolute
    M(point: PointGeometry): PathBuilder {
        this.append("M", point);
        return this;
    }

    m(delta: Partial<DeltaGeometry>): PathBuilder {
        this.append("m", pointUtils.safe(delta));
        return this;
    }

    L(point: PointGeometry): PathBuilder {
        this.append("L", point);
        return this;
    }

    l(delta: Partial<DeltaGeometry>): PathBuilder {
        this.append("l", pointUtils.safe(delta));
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

    C(options: CubicBezierAbsGeometry): PathBuilder {
        this.append("C", options);
        return this;
    }

    c(options: CubicBezierRelGeometry): PathBuilder {
        this.append("c", options);
        return this;
    }

    S(options: CubicBezierShortcutAbsGeometry): PathBuilder {
        this.append("C", options);
        return this;
    }

    s(options: CubicBezierShortcutRelGeometry): PathBuilder {
        this.append("c", options);
        return this;
    }

    Q(options: QuadraticBezierAbsGeometry): PathBuilder {
        this.append("C", options);
        return this;
    }

    q(options: QuadraticBezierRelGeometry): PathBuilder {
        this.append("c", options);
        return this;
    }

    T(options: QuadraticBezierShortcutAbsGeometry): PathBuilder {
        this.append("C", options);
        return this;
    }

    t(options: QuadraticBezierShortcutRelGeometry): PathBuilder {
        this.append("c", options);
        return this;
    }

    A(options: ArcAbsGeometry): PathBuilder {
        this.append("A", options);
        return this;
    }

    a(options: ArcRelGeometry): PathBuilder {
        this.append("a", options);
        return this;
    }
}
