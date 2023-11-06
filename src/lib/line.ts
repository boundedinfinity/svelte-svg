import type {
    LineGeometry,
    PointGeometry,
    ViewBoxGeometry,
    LineAttributes,
    LineSlopIntercept as LineSlopeIntercept,
} from "./types.js";

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

class LineUtils {
    constructor() {}

    slopeIntercept(geometry: LineGeometry): LineSlopeIntercept {
        const slope = this.slope(geometry);
        return {
            m: slope,
            b: (geometry.p1.y / slope) * geometry.p1.x,
        };
    }

    yCoordinate(geometry: LineGeometry, x: number): number {
        // y = mx + b
        const si = this.slopeIntercept(geometry);
        return si.m * x + si.b;
    }

    xCoordinate(geometry: LineGeometry, y: number): number {
        // y = mx + b
        // y - mx = b
        // - mx = b - y
        // mx = -b + y
        // mx = y - b
        // x = (y - b) / m
        const si = this.slopeIntercept(geometry);
        return (y - si.b) / si.m;
    }

    viewBox(line: LineGeometry): ViewBoxGeometry {
        const strokeWidth = Number(
            line.attrs?.strokeWidth || LINE_DEFAULTS.stroke!
        );

        return {
            minX: Math.min(line.p1.x, line.p2.x) - strokeWidth / 2,
            minY: Math.min(line.p1.y, line.p2.y) - strokeWidth / 2,
            width: Math.abs(line.p1.x + line.p2.x) + strokeWidth,
            height: Math.abs(line.p1.y + line.p2.y) + strokeWidth,
        };
    }

    // https://www.mathsisfun.com/algebra/line-midpoint.html
    midPoint(line: LineGeometry): PointGeometry {
        return this.pointAlongLine(line, 50);
    }

    length(line: LineGeometry): number {
        return Math.sqrt(
            Math.pow(line.p2.x - line.p1.x, 2) +
                Math.pow(line.p2.y - line.p1.y, 2)
        );
    }

    // https://www.mathsisfun.com/algebra/line-midpoint.html
    pointAlongLine(line: LineGeometry, percentage: number): PointGeometry {
        const length = this.length(line);
        const dist = length * percentage / 100;
        const x = line.p1.x + dist;
        const y = this.yCoordinate(line, x);

        return { x, y };
    }

    // https://www.mathsisfun.com/geometry/slope.html
    slope(line: LineGeometry): number {
        const dx = line.p2.x - line.p1.x;
        const dy = line.p2.y - line.p1.y;
        return dy / dx;
    }
}

export const lineUtils = new LineUtils();
