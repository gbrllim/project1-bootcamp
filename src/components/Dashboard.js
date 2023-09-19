//----------React----------//
import React, { useState } from "react";

//----------Components----------//
import Stock from "./Stock";
import Pet from "./Pet";

//----------Widgets----------//
const WIDGET_LIST = [
  { id: "g", content: <Pet />, size: 1 },
  {
    id: "a",
    content: <Stock ticker="TSLA" price="$888" priceChange="42" />,
    size: 1,
  },
  {
    id: "b",
    content: <Stock ticker="MSFT" price="$288" priceChange="-4" />,
    size: 1,
  },
  {
    id: "c",
    content: <Stock ticker="ETH" price="$420" priceChange="-14" />,
    size: 1,
  },
  { id: "d", content: "News", size: 1 },
  { id: "f", content: <Pet />, size: 1 },
  { id: "e", content: "News", size: 1 },
  { id: "h", content: "Notes", size: 2 },
  { id: "i", content: "Notes", size: 1 },
  { id: "j", content: "Clock", size: 1 },
];
//----------Core Functions----------//
function Widget({ content, onDragStart }) {
  return (
    <div
      className="flex h-1/4 min-h-[160px] w-auto min-w-[160px] items-center justify-center rounded-xl bg-slate-300 text-xl"
      onDragStart={onDragStart}
      draggable
    >
      {content}
    </div>
  );
}

function WidgetContainer({
  onDrop,
  children,
  onDragEnter,
  onDragLeave,
  isDraggedOver,
  size,
}) {
  return (
    <div
      //Style the grid border when dragged over
      style={
        isDraggedOver
          ? {
              border: "dashed 2px #abcdef",
              borderRadius: "10px",
              boxSizing: "border-box",
              gridColumn: `span ${size}`,
            }
          : { gridColumn: `span ${size}` }
      }
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={(e) => e.preventDefault()}
    >
      {!isDraggedOver && children}
    </div>
  );
}

export default function Dashboard() {
  const [widgets, setWidgets] = useState(WIDGET_LIST);
  const [draggedItemId, setDraggedItemId] = useState(null);
  const [draggedOverContainerId, setDraggedOverContainerId] = useState(null);

  const handleDragStart = (id) => setDraggedItemId(id);
  const handleDragEntered = (id) => setDraggedOverContainerId(id);
  const handleDragLeave = () => setDraggedOverContainerId(null);

  const handleDrop = () => {
    //Prevent refreshing if its dragged over its own container id
    if (!draggedOverContainerId) {
      clearState();
      return;
    }
    //Update new item id
    const fromIndex = widgets.findIndex((w) => w.id === draggedItemId);
    const toIndex = widgets.findIndex((w) => w.id === draggedOverContainerId);
    setWidgets((w) => moveItem(w, fromIndex, toIndex));

    clearState();
  };

  const clearState = () => {
    setDraggedItemId(null);
    setDraggedOverContainerId(null);
  };

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
      {widgets.map((w, i) => (
        <WidgetContainer
          key={w.id}
          onDrop={handleDrop}
          onDragEnter={() => handleDragEntered(w.id)}
          onDragLeave={handleDragLeave}
          isDraggedOver={w.id === draggedOverContainerId}
          size={w.size}
        >
          <Widget
            content={w.content}
            onDragStart={() => handleDragStart(w.id)}
          />
        </WidgetContainer>
      ))}
    </div>
  );
}

function moveItem(list, from, to) {
  const listClone = [...list];
  if (from < to) {
    listClone.splice(to + 1, 0, listClone[from]);
    listClone.splice(from, 1);
  } else if (to < from) {
    listClone.splice(to, 0, listClone[from]);
    listClone.splice(from + 1, 1);
  }
  return listClone;
}
