import { useState } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import Draggable from "./components/draggable";
import Droppable from "./components/droppable";

function App() {
  const [location, setLocation] = useState<"left" | "right">("left");

  function handleDragEnd(event: DragEndEvent) {
    if (event.over?.id === "left-zone") {
      setLocation("left");
    } else if (event.over?.id === "right-zone") {
      setLocation("right");
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        style={{
          display: "flex",
          gap: "40px",
          padding: "40px",
          alignItems: "center",
        }}
      >
        <Droppable id="left-zone" title="Left Zone">
          {location === "left" && <Draggable />}
        </Droppable>

        <Droppable id="right-zone" title="Right Zone">
          {location === "right" && <Draggable />}
        </Droppable>
      </div>
    </DndContext>
  );
}

export default App;
