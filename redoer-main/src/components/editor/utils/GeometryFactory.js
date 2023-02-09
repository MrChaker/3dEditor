import { BoxGeometry, SphereGeometry } from "three";

export default class GeometryFactory {
    geometry;
    constructor(shape) {
        switch (shape) {
            case "sphere":
                this.geometry = new SphereGeometry(
                    0.4,
                    64,
                    32,
                    Math.PI * 2,
                    Math.PI * 2,
                    Math.PI * 2,
                    Math.PI
                );
                break;
            case "cube":
                this.geometry = new BoxGeometry(1, 1, 1);
                break;
            default:
                this.geometry = new BoxGeometry(1, 1, 1);
                break;
        }
    }
}
