//----------React----------//
import React, { useState } from "react";

//----------Components----------//
import Stock from "./widgets/Stock";
import Pet from "./widgets/Pet";
import Note from "./widgets/Note";

//Main Widget List
const WIDGET_LIST = [
  { id: "g", content: <Pet />, size: 1 },
  {
    id: "a",
    content: (
      <Stock ticker="TSLA" name="Tesla Inc" price="$1,337" priceChange="42" />
    ),
    size: 1,
  },
  {
    id: "b",
    content: (
      <Stock
        ticker="MSFT"
        name="Microsoft Corp"
        price="$288"
        priceChange="-4"
      />
    ),
    size: 1,
  },
  {
    id: "c",
    content: (
      <Stock ticker="ETH" name="Ethereum" price="$420" priceChange="-14" />
    ),
    size: 1,
  },
  { id: "h", content: <Note />, size: 1 },
  { id: "d", content: "News", size: 1 },
  { id: "f", content: <Pet />, size: 1 },
  { id: "e", content: "News", size: 1 },
  { id: "k", content: "Youtube", size: 1 },
  { id: "i", content: "Notes", size: 1 },
  { id: "j", content: "Clock", size: 1 },
];
//----------Core Functions----------//
function Widget({ content, onDragStart, onTouchStart }) {
  return (
    <div
      className="flex h-1/4 min-h-[160px] w-auto min-w-[160px] items-center justify-center rounded-xl bg-slate-300 text-xl"
      onDragStart={onDragStart}
      // onTouchStart={onTouchStart}
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
  // onTouchMove,
  // onTouchEnd,
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
      // onTouchMove={onTouchMove}
      // onTouchEnd={onDragLeave}
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
  // const handleTouchStart = (id) => setDraggedItemId(id);
  const handleDragEntered = (id) => setDraggedOverContainerId(id);
  const handleDragLeave = () => setDraggedOverContainerId(null); //Reset Container Id to null after leaving

  const handleDrop = (e) => {
    //Prevent refreshing if its dragged over its own container id
    if (!draggedOverContainerId) {
      clearState();
      return;
    }
    e.preventDefault();
    const widgetType = e.dataTransfer.getData("widgetType");

    let newWidget = null;
    switch (widgetType) {
      case "Stock":
        newWidget = <Stock />;
        break;
      case "Pet":
        newWidget = <Pet />;
        break;
      // Add cases for other widget types if needed
      default:
        break;
    }

    if (newWidget) {
      // Add the new widget to the list of widgets
      setWidgets((prevWidgets) => [...prevWidgets, newWidget]);
    }

    //Update new item id
    const fromIndex = widgets.findIndex((w) => w.id === draggedItemId);
    const toIndex = widgets.findIndex((w) => w.id === draggedOverContainerId);
    setWidgets((w) => moveItem(w, fromIndex, toIndex));
    console.log(draggedItemId);
    console.log(draggedOverContainerId);
    console.log(fromIndex);
    console.log(toIndex);

    clearState();
  };

  const clearState = () => {
    setDraggedItemId(null);
    setDraggedOverContainerId(null);
  };

  return (
    <div className="grid grid-cols-2 gap-3 bg-red-100 md:grid-cols-4 lg:grid-cols-6">
      {widgets.map((w, Id) => (
        <WidgetContainer
          key={w.id}
          onDrop={handleDrop}
          onDragEnter={() => handleDragEntered(w.id)}
          // onTouchMove={() => handleDragEntered(w.id)}
          // onTouchEnd={handleDragLeave}
          onDragLeave={handleDragLeave}
          isDraggedOver={w.id === draggedOverContainerId}
          size={w.size}
        >
          <Widget
            content={w.content}
            onDragStart={() => handleDragStart(w.id)}
            // onTouchStart={() => handleTouchStart(w.id)}
          />
        </WidgetContainer>
      ))}
    </div>
  );
}

function moveItem(list, from, to) {
  const listClone = [...list];
  const [itemToMove] = listClone.splice(from, 1); // Remove the item to be moved
  listClone.splice(to, 0, itemToMove); // Insert the item at the new position
  return listClone;
}
