import React from "react";
import useEditorStore from "../../../store/editorStore";

const EditorToolBar = () => {
    const { selectedElement, updateBoardElement } = useEditorStore(
        (state) => state
    );

    const scaleEl = (val) => {
        let scale = val / 25;
        selectedElement.scale.x = scale;
        selectedElement.scale.y = scale;
        selectedElement.scale.z = scale;
    };
    const rotateEl = (val) => {
        let rotate = val / 25;
        selectedElement.rotation.x = rotate;
        selectedElement.rotation.y = rotate;
        selectedElement.rotation.z = rotate;
    };
    return (
        <div className="editorToolBar">
            <label htmlFor="scale">Scale</label>
            <input
                type="range"
                min={0}
                max={100}
                onChange={(e) => scaleEl(e.target.value)}
            />
            <label htmlFor="rotate">Rotate</label>
            <input
                type="range"
                min={0}
                max={100}
                onChange={(e) => rotateEl(e.target.value)}
            />
        </div>
    );
};

export default EditorToolBar;
