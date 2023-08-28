import type {
    CircleDescriptor,
    LineDescriptor,
    Point,
    ViewBox,
    RotationDirection,
} from "./types.js";
import { degToRad } from "./util.js";

export function circleViewBox(
    circle: CircleDescriptor,
    strokeWidth: number
): ViewBox {
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
    circle: CircleDescriptor,
    theta: number = 0,
    direction: RotationDirection = "counter-clockwise"
): Point {
    const realTheta = circleAngle(theta, direction);
    const radians = degToRad(realTheta);

    return {
        x: circle.r * Math.cos(radians) + circle.c.x,
        y: circle.r * Math.sin(radians) + circle.c.y,
    };
}

export function circleCircumferenceLine(
    circle: CircleDescriptor,
    theta: number = 0,
    direction: RotationDirection = "counter-clockwise"
): LineDescriptor {
    return {
        p1: circle.c,
        p2: circleCircumferencePoint(circle, theta, direction),
    };
}
