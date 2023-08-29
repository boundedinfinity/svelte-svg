import type { LineDescriptor, Point, ViewBox } from "./types.js";

export const DEFAULT_LINE_STROKE_WIDTH = 3;

export function lineViewBox(line: LineDescriptor): ViewBox {
    const strokeWidth = line.stroke || DEFAULT_LINE_STROKE_WIDTH;
    return {
        minX: Math.min(line.p1.x, line.p2.x) - strokeWidth / 2,
        minY: Math.min(line.p1.y, line.p2.y) - strokeWidth / 2,
        width: Math.abs(line.p1.x + line.p2.x) + strokeWidth,
        height: Math.abs(line.p1.y + line.p2.y) + strokeWidth,
    };
}

// https://www.mathsisfun.com/algebra/line-midpoint.html
export function lineMidPoint(line: LineDescriptor): Point {
    return linePoint(line, 50);
}

// https://www.mathsisfun.com/algebra/line-midpoint.html
export function linePoint(line: LineDescriptor, percentage: number): Point {
    return {
        x: ((line.p1.x + line.p2.x) * percentage) / 100,
        y: ((line.p1.y + line.p2.y) * percentage) / 100,
    };
}

// https://www.mathsisfun.com/geometry/slope.html
export function lineSlope(line: LineDescriptor): number {
    return (line.p1.x - line.p2.x) / (line.p2.y - line.p2.y);
}
