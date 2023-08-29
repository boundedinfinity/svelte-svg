export interface Point {
    x: number;
    y: number;
    stroke?: number;
}

export interface Delta {
    dx: number,
    dy: number,
}

// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
export interface ViewBox {
    minX: number;
    minY: number;
    width: number;
    height: number;
}

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
export interface CircleDescriptor {
    c: Point;
    r: number;
    stroke?: number;
}

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
export interface LineDescriptor {
    p1: Point;
    p2: Point;
    stroke?: number;
}

export type RotationDirection = 'clockwise' | 'counter-clockwise'
export type LineCap = 'butt'| 'round' | 'square' | 'line' | 'point' | 'arrow'

export interface CubicBezierAbs {
    c1: Point
    c2: Point
    e: Point
}

export interface CubicBezierRel {
    c1: Delta
    c2: Delta
    e: Delta
}

export interface CubicBezierShortcutAbs {
    c2: Point
    e: Point
}

export interface CubicBezierShortcutRel {
    c2: Delta
    e: Delta
}

export interface QuadraticBezierAbs {
    c1: Point
    e: Point
}

export interface QuadraticBezierRel {
    c1: Delta
    e: Delta
}

export interface QuadraticBezierShortcutAbs {
    e: Point
}

export interface QuadraticBezierShortcutRel {
    e: Delta
}

export interface ArcAbs {
    rx: number;
    ry: number;
    xAxisRotation: number;
    largeArcFlag: any;
    sweepFlag: any;
    e: Point
}

export interface ArcRel {
    rx: number;
    ry: number;
    xAxisRotation: number;
    largeArcFlag: any;
    sweepFlag: any;
    e: Delta
}
