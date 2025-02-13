

import { useDrag } from "react-dnd";

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "button",
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      className="p-3 m-1 bg-gray-300 rounded shadow hover:bg-gray-400"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {item.label}
    </button>
  );
};

export default DraggableItem;
