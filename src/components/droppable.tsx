import { type ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  id: string;
  title: string;
  children?: ReactNode;
}

export default function Droppable({ id, title, children }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: "200px",
        height: "200px",
        border: "2px dashed gray",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        background: isOver ? "#e7ffe7" : "#fafafa",
        transition: "0.2s",
      }}
    >
      <strong>{title}</strong>
      {children}
    </div>
  );
}
