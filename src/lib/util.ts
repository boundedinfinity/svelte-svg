import type { ViewBoxGeometry } from "./types.js";

export function viewBoxToString(vb: ViewBoxGeometry): string {
    return `${vb.minX} ${vb.minY} ${vb.width} ${vb.height}`;
}

export function degToRad(degrees: number): number {
    return (degrees * Math.PI) / 180;
}

export function radToDeg(radians: number): number {
    return (radians * 180) / Math.PI;
}

export function percentageInc(size: number, percentage: number): number {
    return size + size * percentage;
}

export function percentageDec(size: number, percentage: number): number {
    return size - size * percentage;
}

export function addStyle(
    current: string,
    name: string,
    value?: string | number
): string {
    if (value) current += `--${name}: ${value};`;
    return current;
}

export function debugDump(debug: boolean, value: any) {
    if (debug) JSON.stringify(value, null, " ".repeat(4));
}
