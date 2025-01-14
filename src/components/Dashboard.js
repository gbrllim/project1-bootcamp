//----------React----------//
import React from "react";

function Widget({ content, onDragStart }) {
  return (
    <div
      className=" flex h-1/4 min-h-[160px] w-auto min-w-[160px] items-center justify-center rounded-xl bg-slate-300 text-xl shadow-lg"
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

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: props.widgets,
      draggedItemId: null,
      draggedOverContainerId: null,
    };
  }

  handleDragStart = (id) => {
    this.setState({ draggedItemId: id });
  };

  handleDragEntered = (id) => {
    this.setState({ draggedOverContainerId: id });
  };

  handleDragLeave = () => {
    this.setState({ draggedOverContainerId: null });
  };

  handleDrop = (e) => {
    const { draggedItemId, draggedOverContainerId, widgets } = this.state;

    if (!draggedOverContainerId || draggedItemId === draggedOverContainerId) {
      this.clearState();
      return;
    }
    console.log("Initial widgets", widgets);
    //Identify indexes to swap & run moveItem function to splice it
    const fromIndex = widgets.findIndex((w) => w.id === draggedItemId);
    const toIndex = widgets.findIndex((w) => w.id === draggedOverContainerId);
    const updatedWidgets = this.moveItem(widgets, fromIndex, toIndex);
    console.log("fromIndex:", fromIndex);
    console.log("toIndex:", toIndex);
    console.log("draggedItemId:", draggedItemId);
    console.log("draggedOverContainerId:", draggedOverContainerId);
    console.log("updatedWidgets", updatedWidgets);

    this.setState(
      () => {
        this.props.updateWidget(updatedWidgets);
      },
      () => {
        this.clearState();
      },
    );
  };

  clearState = () => {
    this.setState({
      draggedItemId: null,
      draggedOverContainerId: null,
    });
  };

  // Function to swap items on widgets list
  moveItem = (list, from, to) => {
    const listClone = [...list];
    const [itemToMove] = listClone.splice(from, 1);
    listClone.splice(to, 0, itemToMove);
    return listClone;
  };

  render() {
    const { draggedOverContainerId } = this.state;
    const { widgets } = this.props;

    return (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {widgets.map((w, i) => (
          <WidgetContainer
            key={w.id}
            onDrop={this.handleDrop}
            onDragEnter={() => this.handleDragEntered(w.id)}
            onDragLeave={this.handleDragLeave}
            isDraggedOver={w.id === draggedOverContainerId}
            size={w.size}
          >
            <Widget
              content={w.content}
              onDragStart={() => this.handleDragStart(w.id)}
            />
          </WidgetContainer>
        ))}
      </div>
    );
  }
}

export default Dashboard;
