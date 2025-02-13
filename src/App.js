import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Calculator from "./components/Calculator";
import DropZone from "./components/DropZone";
import DraggableItem from "./components/DraggableItem";

const buttonItems = [
  { label: "1" }, { label: "2" }, { label: "3" }, { label: "+" },
  { label: "4" }, { label: "5" }, { label: "6" }, { label: "-" },
  { label: "7" }, { label: "8" }, { label: "9" }, { label: "*" },
  { label: "0" }, { label: "=" }, { label: "/" }
];

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">Drag & Drop Calculator</h1>

        <div className="flex gap-4">
          <div className="p-4 border rounded-md shadow-md bg-white">
            <h2 className="text-lg font-semibold mb-2">Buttons</h2>
            <div className="grid grid-cols-4 gap-2">
              {buttonItems.map((item, index) => (
                <DraggableItem key={index} item={item} />
              ))}
            </div>
          </div>
          <DropZone />
        </div>
        <Calculator />
      </div>
    </DndProvider>
  );
};

export default App;
