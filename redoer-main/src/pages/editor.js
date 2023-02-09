import React from "react";
import EditorBoard from "../components/editor/EditorBoard";
import EditorToolBar from "../components/editor/EditorToolBar/EditorToolBar";
import EditorSideBar from "../components/editor/SideBar/EditorSideBar";
import useEditorStore from "../store/editorStore";

const Editor = () => {
    const { selectedElement } = useEditorStore((state) => state);
    return (
        <div className="editor">
            <EditorSideBar />
            <EditorBoard />
            {selectedElement && <EditorToolBar />}
        </div>
    );
};

export default Editor;
