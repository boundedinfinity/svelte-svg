import type { CircleDescriptor, Point } from "../types.js";
import { circleCircumferencePoint } from "../circle.js";
import { pathBuilder} from '../path.js'

export function polygonVertices(
    circle: CircleDescriptor,
    vertices: number
): Point[] {
    const points: Point[] = [];
    const step = 360 / vertices;

    for (let theta = step; theta <= 360; theta += step) {
        points.push(circleCircumferencePoint(circle, theta));
    }

    return points;
}


export function polygonPath(circle: CircleDescriptor,
    vertices: number) : string {
        const points = polygonVertices(circle, vertices)
        const builder = pathBuilder()

        for(let i = 0; i < points.length; i++) {
            const point = points[i]

            if(i == 0) {
                builder.M(point)
            } else {
                builder.L(point)
            }
        }

        builder.Z()
        

        return builder.build()
    }
