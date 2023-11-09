import type { Tweened } from "svelte/motion";

export interface StepTweened<T> extends Tweened<T> {
    next(): Promise<void>;
    prev(): Promise<void>;
    values(): T[];
}

// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation
interface PresentationAttributes {
    fill: string;
    fillOpacity: string | number;
    display: string;
    visibility: string;
    stroke: string;
    strokeWidth: number;
    strokeOpacity: string | number;
    strokeDasharray: string | number;
    strokeDashoffset: string;
    strokeLinecap: string;
    strokeLinejoin: string;
    strokeMiterlimit: number;
}

export interface PointGeometry {
    x: number;
    y: number;
    attrs?: Partial<PointAttributes>;
}

export interface PointAttributes extends PresentationAttributes {}

export interface DeltaGeometry {
    dx: number;
    dy: number;
}

// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
export interface ViewBoxGeometry {
    minX: number;
    minY: number;
    width: number;
    height: number;
}

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
export interface CircleGeometry {
    c: PointGeometry;
    r: number;
    attrs?: Partial<CircleAttributes>;
}

export interface CircleAttributes extends PresentationAttributes {}

export interface PolygonGeometry extends CircleGeometry {}
export interface TriangleGeometry extends PolygonGeometry {}
export interface SquareGeometry extends PolygonGeometry {}
export interface PentagonGeometry extends PolygonGeometry {}
export interface HexagonGeometry extends PolygonGeometry {}
export interface HeptagonGeometry extends PolygonGeometry {}
export interface OctagonGeometry extends PolygonGeometry {}
export interface EnnecagonGeometry extends PolygonGeometry {}
export interface DecagonGeometry extends PolygonGeometry {}
export interface HendecagonGeometry extends PolygonGeometry {}
export interface DodecagonGeometry extends PolygonGeometry {}

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
export interface LineGeometry {
    a: PointGeometry;
    b: PointGeometry;
    attrs?: Partial<LineAttributes>;
}

export interface LineSlopeIntercept {
    // y = mx + b
    m: number;
    b: number;
    attrs?: Partial<LineAttributes>;
}

export interface LineAttributes extends PresentationAttributes {}

export type RotationDirection = "clockwise" | "counter-clockwise";
export type LineCap = "butt" | "round" | "square" | "line" | "point" | "arrow";

export interface CubicBezierAbsGeometry {
    c1: PointGeometry;
    c2: PointGeometry;
    e: PointGeometry;
}

export interface CubicBezierRelGeometry {
    c1: DeltaGeometry;
    c2: DeltaGeometry;
    e: DeltaGeometry;
}

export interface CubicBezierShortcutAbsGeometry {
    c2: PointGeometry;
    e: PointGeometry;
}

export interface CubicBezierShortcutRelGeometry {
    c2: DeltaGeometry;
    e: DeltaGeometry;
}

export interface QuadraticBezierAbsGeometry {
    c1: PointGeometry;
    e: PointGeometry;
}

export interface QuadraticBezierRelGeometry {
    c1: DeltaGeometry;
    e: DeltaGeometry;
}

export interface QuadraticBezierShortcutAbsGeometry {
    e: PointGeometry;
}

export interface QuadraticBezierShortcutRelGeometry {
    e: DeltaGeometry;
}

export interface ArcAbsGeometry {
    rx: number;
    ry: number;
    xAxisRotation: number;
    largeArcFlag: any;
    sweepFlag: any;
    e: PointGeometry;
}

export interface ArcRelGeometry {
    rx: number;
    ry: number;
    xAxisRotation: number;
    largeArcFlag: any;
    sweepFlag: any;
    e: DeltaGeometry;
}
