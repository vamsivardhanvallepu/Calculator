import { useDrop } from "react-dnd";
import useCalculatorStore from "./useCalculatorStore";

const DropZone = () => {
  const { components, addComponent, removeComponent } = useCalculatorStore();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "button",
    drop: (item) => toggleComponent(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const toggleComponent = (component) => {
    const exists = components.some((c) => c.label === component.label);
    if (exists) {
      removeComponent(component.label);
    } else {
      addComponent(component);
    }
  };

  return (
    <div
      ref={drop}
      className={`w-full min-h-[300px] p-4 border rounded-md shadow-md ${isOver ? "border-green-500" : "border-gray-300"
        }`}
    >
      {components.length === 0 ? (
        <p className="text-gray-400">Drag or click components to add...</p>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {components.map((comp, index) => (
            <button
              key={index}
              className="p-3 bg-blue-200 rounded shadow hover:bg-red-400"
              onClick={() => toggleComponent(comp)}
            >
              {comp.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropZone;
