import type {
    LineGeometry,
    PointGeometry,
    ViewBoxGeometry,
    LineAttributes,
    LineSlopIntercept as LineSlopeIntercept,
} from "./types.js";

import { pointUtils } from "./point.js";

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
        const m = this.slope(geometry);
        const b = geometry.a.y - m * geometry.a.x;
        return { m, b };
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
            minX: Math.min(line.a.x, line.b.x) - strokeWidth / 2,
            minY: Math.min(line.a.y, line.b.y) - strokeWidth / 2,
            width: Math.abs(line.a.x + line.b.x) + strokeWidth,
            height: Math.abs(line.a.y + line.b.y) + strokeWidth,
        };
    }

    // https://www.mathsisfun.com/algebra/line-midpoint.html
    midPoint(line: LineGeometry): PointGeometry {
        return this.pointAlongLine(line, 50);
    }

    // d=√((x2 – x1)² + (y2 – y1)²)
    length(line: LineGeometry): number {
        const { dx, dy } = pointUtils.delta(line.a, line.b);
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }

    // https://www.mathsisfun.com/algebra/line-midpoint.html
    pointAlongLine(line: LineGeometry, percentage: number): PointGeometry {
        if (percentage < 0 || percentage > 100) {
            throw new Error("invalid percentage");
        }

        const p = percentage / 100;
        const { dx, dy } = pointUtils.delta(line.a, line.b);
        const x = line.a.x + p * dx;
        const y = line.a.y + p * dy;

        return { x, y };
    }

    // https://www.mathsisfun.com/geometry/slope.html
    slope(line: LineGeometry): number {
        const dx = line.b.x - line.a.x;
        const dy = line.b.y - line.a.y;
        return dy / dx;
    }

    translate(line: LineGeometry, dx: number, dy: number): LineGeometry {
        const next: LineGeometry = { ...line };
        next.a = pointUtils.translate(line.a, dx, dy);
        next.b = pointUtils.translate(line.b, dx, dy);
        return next;
    }
}

export const lineUtils = new LineUtils();
