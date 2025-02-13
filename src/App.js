import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Calculator from "./components/Calculator";
import DropZone from "./components/DropZone";
import DraggableItem from "./components/DraggableItem";
import useThemeStore from "./components/useThemeStore";

const buttonItems = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "+" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "-" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "*" },
  { label: "0" },
  { label: "=" },
  { label: "/" },
];

const App = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`${theme} min-h-screen transition-colors duration-300`}>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <h1 className="text-2xl font-bold mb-4">Drag & Drop Calculator</h1>

          <button
            onClick={toggleTheme}
            className="mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md"
          >
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
          </button>

          <div className="flex gap-4">
            <div className="p-4 border rounded-md shadow-md bg-white dark:bg-gray-800">
              <h2 className="text-lg font-semibold mb-2">Buttons</h2>
              <div className="grid grid-cols-4 gap-2">
                {buttonItems.map((item, index) => (
                  <DraggableItem key={index} item={item} type="button" />
                ))}
              </div>
            </div>
            <DropZone />
          </div>
          <Calculator />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
