import type { PointGeometry } from "./index.js";

import type {
    CircleGeometry,
    CircleAttributes,
    LineGeometry,
    ViewBoxGeometry,
    RotationDirection,
    DeltaGeometry,
} from "./types.js";

import { utils } from "./util.js";
import { pointUtils } from "./point.js";

export const CIRCLE_DEFAULTS: CircleAttributes = {
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

class CircleUtils {
    constructor() {}

    viewBox(circle: CircleGeometry): ViewBoxGeometry {
        const strokeWidth =
            circle.attrs?.strokeWidth || CIRCLE_DEFAULTS.strokeWidth!;
        const length: number = circle.r * 2 + strokeWidth;
        const half = length / 2;

        return {
            minX: circle.c.x - half,
            minY: circle.c.x - half,
            width: length,
            height: length,
        };
    }

    angle(
        degrees: number,
        direction: RotationDirection = "counter-clockwise"
    ): number {
        if (direction == "counter-clockwise") {
            return 360 - degrees;
        } else {
            return degrees;
        }
    }

    pointOnCircumference(
        circle: CircleGeometry,
        theta: number = 0,
        direction: RotationDirection = "counter-clockwise"
    ): PointGeometry {
        const realTheta = this.angle(theta, direction);
        const radians = utils.math.degToRad(realTheta);

        return {
            x: circle.r * Math.cos(radians) + circle.c.x,
            y: circle.r * Math.sin(radians) + circle.c.y,
        };
    }

    lineToCircumference(
        circle: CircleGeometry,
        theta: number = 0,
        direction: RotationDirection = "counter-clockwise"
    ): LineGeometry {
        return {
            a: circle.c,
            b: this.pointOnCircumference(circle, theta, direction),
        };
    }

    yCoordinate(circle: CircleGeometry, x: number): [number, number] {
        const h = circle.c.x;
        const k = circle.c.y;
        const r = circle.r;
        const s = utils.math.pythagoream(r, x - h);
        return [k + s[0], k + s[1]];
    }

    translate(
        circle: CircleGeometry,
        delta: Partial<DeltaGeometry>
    ): CircleGeometry {
        const next: CircleGeometry = { ...circle };
        next.c = pointUtils.translate(circle.c, delta);
        return next;
    }
}

export const circleUtils = new CircleUtils();
