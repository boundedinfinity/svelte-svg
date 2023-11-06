import type { PointGeometry } from "./index.js";

import type {
    CircleGeometry,
    CircleAttributes,
    LineGeometry,
    ViewBoxGeometry,
    RotationDirection,
} from "./types.js";
import { degToRad } from "./util.js";

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
        const radians = degToRad(realTheta);

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
            p1: circle.c,
            p2: this.pointOnCircumference(circle, theta, direction),
        };
    }

    yCoordinate(circle: CircleGeometry, x: number): number {
        const h = circle.c.x;
        const k = -circle.c.y;
        const r = circle.r;
        const y = k + Math.sqrt(Math.pow(r, 2) - Math.pow(x - h, 2));

        return -y;
    }
}

export const circleUtils = new CircleUtils();
