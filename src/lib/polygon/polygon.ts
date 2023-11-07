import type { CircleGeometry, PointGeometry } from "../types.js";
import { circleUtils } from "../circle.js";
import { pathBuilder } from "../path.js";

class PolygonUtils {
    vertices(circle: CircleGeometry, vertices: number): PointGeometry[] {
        const points: PointGeometry[] = [];
        const step = 360 / vertices;

        for (let theta = step; theta <= 360; theta += step) {
            points.push(circleUtils.pointOnCircumference(circle, theta));
        }

        return points;
    }

    path(circle: CircleGeometry, vertices: number): string {
        const points = this.vertices(circle, vertices);
        const builder = pathBuilder();

        for (let i = 0; i < points.length; i++) {
            const point = points[i];

            if (i == 0) {
                builder.M(point);
            } else {
                builder.L(point);
            }
        }

        builder.Z();

        return builder.build();
    }
}

export const polygonUtils = new PolygonUtils();
