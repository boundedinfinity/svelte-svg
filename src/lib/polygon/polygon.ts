import type {
    PolygonGeometry,
    PointGeometry,
    DeltaGeometry,
} from "../types.js";
import { circleUtils } from "../circle.js";
import { pointUtils } from "../point.js";
import { pathBuilder } from "../path.js";

class PolygonUtils {
    vertices(circle: PolygonGeometry, vertices: number): PointGeometry[] {
        const points: PointGeometry[] = [];
        const step = 360 / vertices;

        for (let theta = step; theta <= 360; theta += step) {
            points.push(circleUtils.pointOnCircumference(circle, theta));
        }

        return points;
    }

    path(circle: PolygonGeometry, vertices: number): string {
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

    translate<T extends PolygonGeometry>(
        circle: T,
        delta: Partial<DeltaGeometry>
    ): T {
        const next: T = { ...circle };
        next.c = pointUtils.translate(circle.c, delta);
        return next;
    }
}

export const polygonUtils = new PolygonUtils();
