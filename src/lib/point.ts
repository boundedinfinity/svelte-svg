import type { PointGeometry, PointAttributes } from "./types.js";

export const POINT_DEFAULTS: PointAttributes = {
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

class PointUtils {
    translate(p: PointGeometry, dx: number, dy: number): PointGeometry {
        return {
            x: p.x + dx,
            y: p.y + dy,
            attrs: { ...p.attrs },
        };
    }

    delta(a: PointGeometry, b: PointGeometry): { dx: number; dy: number } {
        return {
            dx: b.x - a.x,
            dy: b.y - a.y,
        };
    }
}

export const pointUtils = new PointUtils();
