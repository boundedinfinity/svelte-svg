import type { ViewBoxGeometry } from "./types.js";

export const utils = {
    viewBoxToString: function (vb: ViewBoxGeometry): string {
        return `${vb.minX} ${vb.minY} ${vb.width} ${vb.height}`;
    },

    styles: function (props: { [key: string]: any }) {
        return Object.entries(props)
            .filter(([_, val]) => val !== undefined)
            .map(([key, val]) => [
                key
                    .split(/(?=[A-Z])/)
                    .join("-")
                    .toLocaleLowerCase(),
                val,
            ])
            .map(([key, val]) => `--${key}: ${val};`)
            .join(" ");
    },

    debugDump: function (debug: boolean, value: any) {
        if (debug) JSON.stringify(value, null, " ".repeat(4));
    },

    math: {
        degToRad: function (degrees: number): number {
            return (degrees * Math.PI) / 180;
        },
        radToDeg: function (radians: number): number {
            return (radians * 180) / Math.PI;
        },
        pythagoream: function (a: number, b: number): [number, number] {
            const r = Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2));
            return [r, -r];
        },
    },

    percentage: {
        of1: function (n: number, p: number): number {
            return n * p;
        },
        of100: function (this, n: number, p: number): number {
            return this.of1(n, p / 100);
        },
        incBy: function (this, n: number, p: number): number {
            return n + this.of100(n, p);
        },
        decBy: function (this, n: number, p: number): number {
            return n - this.of100(n, p);
        },
    },
};
