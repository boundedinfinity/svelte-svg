import type { PointGeometry } from "./index.js";

import type {
    CircleGeometry,
    LineGeometry,
    ViewBoxGeometry,
    RotationDirection,
} from "./types.js";
import { degToRad } from "./util.js";

export const DEFAULT_CIRCLE_STROKE_WIDTH = 3;

export function circleViewBox(circle: CircleGeometry): ViewBoxGeometry {
    const strokeWidth = circle.stroke || DEFAULT_CIRCLE_STROKE_WIDTH;
    const length: number = circle.r * 2 + strokeWidth;
    const half = length / 2;

    return {
        minX: circle.c.x - half,
        minY: circle.c.x - half,
        width: length,
        height: length,
    };
}

export function circleAngle(
    degrees: number,
    direction: RotationDirection = "counter-clockwise"
): number {
    if (direction == "counter-clockwise") {
        return 360 - degrees;
    } else {
        return degrees;
    }
}

export function circleCircumferencePoint(
    circle: CircleGeometry,
    theta: number = 0,
    direction: RotationDirection = "counter-clockwise"
): PointGeometry {
    const realTheta = circleAngle(theta, direction);
    const radians = degToRad(realTheta);

    return {
        x: circle.r * Math.cos(radians) + circle.c.x,
        y: circle.r * Math.sin(radians) + circle.c.y,
    };
}

export function circleCircumferenceLine(
    circle: CircleGeometry,
    theta: number = 0,
    direction: RotationDirection = "counter-clockwise"
): LineGeometry {
    return {
        p1: circle.c,
        p2: circleCircumferencePoint(circle, theta, direction),
    };
}
