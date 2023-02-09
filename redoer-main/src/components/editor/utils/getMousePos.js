import { Vector3 } from "three";

export const getMousePos = (mouseEvent, camera) => {
    var vec = new Vector3(); // create once and reuse
    var pos = new Vector3(); // create once and reuse

    vec.set(
        (mouseEvent.clientX / (window.innerWidth + 120)) * 2 - 1, // 120 is for nav/sidebars height/width
        -(mouseEvent.clientY / (window.innerHeight + 120)) * 2 + 1,
        0.5
    );

    vec.unproject(camera);
    vec.sub(camera.position).normalize();

    var distance = -camera.position.z / vec.z;

    pos.copy(camera.position).add(vec.multiplyScalar(distance));

    return pos;
};
