import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { useState } from "react";
import useEditorStore from "../../../store/editorStore";
import { getMousePos } from "../utils/getMousePos";

const BoardElement = ({ el }) => {
    const { setSelectedElement, selectedElement, updateBoardElement } =
        useEditorStore((state) => state);
    const [isGrabbed, setIsGrabbed] = useState(false);
    const [pos, setPos] = useState([el.position.x, el.position.y, 0]);
    const [scale, setScale] = useState([el.scale.x, el.scale.y, el.scale.z]);
    const [rotate, setRotate] = useState([
        el.rotation.x,
        el.rotation.y,
        el.rotation.z,
    ]);

    useFrame(() => {
        el.position.x = pos.x;
        el.position.y = pos.y;

        setScale([el.scale.x, el.scale.y, el.scale.z]);
        setRotate([el.rotation.x, el.rotation.y, el.rotation.z]);

        /* updateBoardElement(el); */
    });
    const onPointerEnter = () => {
        document.body.style.cursor = "pointer";
    };

    const onPointerDown = () => {
        console.log("grabbed");
        setIsGrabbed(true);
        setSelectedElement(el.uuid);
    };

    const onPointerLeave = () => {
        document.body.style.cursor = "auto";
    };

    const onPointerMove = (e) => {
        if (isGrabbed) {
            /* const pos = getMousePos(e, _3dCanvas); */
            setPos([e.point.x, e.point.y, 0]);
        }
    };

    const onPointerUp = () => {
        console.log("let go");
        setIsGrabbed(false);
    };

    return (
        <>
            <mesh
                geometry={el.geometry}
                position={pos}
                scale={scale}
                rotation={rotate}
                onPointerEnter={onPointerEnter}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerLeave}
                onClick={() => setSelectedElement(el.uuid)}>
                <meshLambertMaterial
                    color={el.color || "orange"}
                    transparent
                    opacity={selectedElement?.uuid == el.uuid ? "0.5" : "1"}
                />
            </mesh>
        </>
    );
};

export default BoardElement;
