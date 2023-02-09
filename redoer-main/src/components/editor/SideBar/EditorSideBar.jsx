import { Color, Mesh, MeshLambertMaterial } from "three";
import useEditorStore from "../../../store/editorStore";
import "../Editor.css";
import GeometryFactory from "../utils/GeometryFactory";
import { getMousePos } from "../utils/getMousePos";

const EditorSideBar = () => {
    return (
        <ul className="sidebar flex flex-column align-items-center gap-10">
            <SideBarElement el={"🟡"} shape="sphere" />
            <SideBarElement el={"🟨"} shape="cube" />
        </ul>
    );
};

const SideBarElement = ({ el, shape }) => {
    const { addBoardElement, _3dCanvas } = useEditorStore((state) => state);
    const onDragEnd = (e) => {
        const geometry = new GeometryFactory(shape).geometry;
        const mesh = new Mesh(geometry);
        const pos = getMousePos(e, _3dCanvas.camera)

        mesh.position.setX(pos.x);
        mesh.position.setY(pos.y);
        addBoardElement(mesh);
    };
    /* const onDrag = (e) =>{

    } */
    return (
        <li draggable onDragEnd={onDragEnd}>
            {el}
        </li>
    );
};
export default EditorSideBar;
