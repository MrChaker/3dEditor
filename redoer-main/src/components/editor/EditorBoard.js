import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import useEditorStore from "../../store/editorStore";
import BoardElement from "./BoardElement/BoardElement";
import "./Editor.css";

const EditorBoard = () => {
    const { set3dCanvas, boardElements } = useEditorStore((state) => state);
    console.log(boardElements);
    return (
        <div className="editorBoard">
            <Canvas
                onCreated={(state) => {
                    console.log(state);
                    set3dCanvas(state);
                }}>
                <ambientLight color={0xffffff} intensity={0.6} />
                <directionalLight
                    color={0xffffff}
                    castShadow={true}
                    position={[-1, 2, 1]}
                />
                {boardElements.map((el) => (
                    <BoardElement key={el.uuid} el={el} />
                ))}
            </Canvas>
        </div>
    );
};

export default EditorBoard;
