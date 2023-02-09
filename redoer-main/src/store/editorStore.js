import create from "zustand";

const useEditorStore = create((set) => ({
    _3dCanvas: null,
    boardElements: [],
    selectedElement: null,

    set3dCanvas: (_3dCanvas) => set(() => ({ _3dCanvas })),
    addBoardElement: (element) =>
        set(({ boardElements }) => ({
            boardElements: [...boardElements, element],
        })),
    updateBoardElement: (el) =>
        set(({ boardElements }) => ({
            boardElements: boardElements.map((_el) => {
                if (_el.uuid == el.uuid) {
                    return el;
                }
                /* return el; */
            }),
        })),
    setSelectedElement: (uuid) =>
        set(({ boardElements }) => ({
            selectedElement: boardElements.find((el) => el.uuid == uuid),
        })),
}));

export default useEditorStore;
