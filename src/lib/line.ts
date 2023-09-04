import type { LineGeometry, PointGeometry, ViewBoxGeometry, LineAttributes } from "./types.js";

export const LINE_DEFAULTS: LineAttributes = {
    display: "inline",
    fill: "black",
    fillOpacity: 1,
    stroke: "black",
    strokeDasharray: 0,
    strokeDashoffset: "none",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    strokeMiterlimit: 4,
    strokeOpacity: 1,
    strokeWidth: 3,
    visibility: "visible",
};

export function lineViewBox(line: LineGeometry): ViewBoxGeometry {
    const strokeWidth = Number(line.attrs?.strokeWidth || LINE_DEFAULTS.stroke!);
    
    return {
        minX: Math.min(line.p1.x, line.p2.x) - strokeWidth / 2,
        minY: Math.min(line.p1.y, line.p2.y) - strokeWidth / 2,
        width: Math.abs(line.p1.x + line.p2.x) + strokeWidth,
        height: Math.abs(line.p1.y + line.p2.y) + strokeWidth,
    };
}

// https://www.mathsisfun.com/algebra/line-midpoint.html
export function lineMidPoint(line: LineGeometry): PointGeometry {
    return linePoint(line, 50);
}

// https://www.mathsisfun.com/algebra/line-midpoint.html
export function linePoint(line: LineGeometry, percentage: number): PointGeometry {
    return {
        x: ((line.p1.x + line.p2.x) * percentage) / 100,
        y: ((line.p1.y + line.p2.y) * percentage) / 100,
    };
}

// https://www.mathsisfun.com/geometry/slope.html
export function lineSlope(line: LineGeometry): number {
    return (line.p1.x - line.p2.x) / (line.p2.y - line.p2.y);
}
