import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Draggable() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "blue-cube",
  });

  const style = {
    width: "100px",
    height: "100px",
    background: "#4e7fff",
    borderRadius: "10px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "grab",
    transform: transform ? CSS.Translate.toString(transform) : undefined,
    transition: "transform 0.2s",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      Drag me
    </div>
  );
}
