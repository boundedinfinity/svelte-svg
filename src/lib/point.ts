import type { PointGeometry, PointAttributes, DeltaGeometry } from "./types.js";

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
    safe(delta: Partial<DeltaGeometry>): DeltaGeometry {
        return {
            dx: delta.dx || 0,
            dy: delta.dy || 0,
        };
    }
    translate(p: PointGeometry, delta: Partial<DeltaGeometry>): PointGeometry {
        return {
            x: p.x + (delta.dx ?? 0),
            y: p.y + (delta.dy ?? 0),
            attrs: { ...p.attrs },
        };
    }

    delta(a: PointGeometry, b: PointGeometry): DeltaGeometry {
        return {
            dx: b.x - a.x,
            dy: b.y - a.y,
        };
    }
}

export const pointUtils = new PointUtils();
