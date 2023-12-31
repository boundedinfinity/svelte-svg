// Reexport your entry components here

export type {
    PointGeometry,
    DeltaGeometry,
    ViewBoxGeometry,
    LineCap,
    LineGeometry,
    CircleGeometry,
    CircleAttributes,
    RotationDirection,
    ArcAbsGeometry,
    ArcRelGeometry,
    CubicBezierAbsGeometry,
    CubicBezierRelGeometry,
    CubicBezierShortcutAbsGeometry,
    CubicBezierShortcutRelGeometry,
    QuadraticBezierAbsGeometry,
    QuadraticBezierRelGeometry,
    QuadraticBezierShortcutAbsGeometry,
    QuadraticBezierShortcutRelGeometry,
} from "./types.js";

export { pathBuilder } from "./path.js";
export { aniUtils } from "./animation.js";

export { default as Arc } from "./Arc.svelte";

export { pointUtils, POINT_DEFAULTS } from "./point.js";
export { default as Point } from "./Point.svelte";

export { lineUtils, LINE_DEFAULTS } from "./line.js";
export { default as Line } from "./Line.svelte";
export { default as LinePoint } from "./LinePoint.svelte";
export { default as LineMidPoint } from "./LineMidPoint.svelte";
export { default as LineSvg } from "./LineSvg.svelte";

export { circleUtils, CIRCLE_DEFAULTS } from "./circle.js";
export { default as Circle } from "./Circle.svelte";
export { default as CircleCircumPoint } from "./CircleCircumPoint.svelte";
export { default as CircleRadiusLine } from "./CircleRadiusLine.svelte";
export { default as CircleRadiusSlice } from "./CircleRadiusSlice.svelte";
export { default as CircleSvg } from "./CircleSvg.svelte";
export { default as CircleTween } from "./CircleTween.svelte";

export { polygonUtils } from "./polygon/polygon.js";
export { default as Triangle } from "./polygon/Triangle.svelte"; // 3, trigon
export { default as Square } from "./polygon/Square.svelte"; // 4, tetragon
export { default as Pentagon } from "./polygon/Pentagon.svelte"; // 5
export { default as Hexagon } from "./polygon/Hexagon.svelte"; // 6
// export { default as Heptagon } from "./polygon/Heptagon.svelte";     // 7
export { default as Octagon } from "./polygon/Octagon.svelte"; // 8
export { default as Enneagon } from "./polygon/Enneagon.svelte"; // 9
export { default as Decagon } from "./polygon/Decagon.svelte"; // 10
// export { default as Hendecagon } from "./polygon/Hendecagon.svelte"; // 11
export { default as Dodecagon } from "./polygon/Dodecagon.svelte"; // 12
