import React, { Children } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const DndWrapper = ({ children, handleChange }) => {
  return (
    <DragDropContext onDragEnd={handleChange}>
      <Droppable droppableId="list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export const DndItem = ({ index, id, children }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) =>
        Children.map(children, ({ type: Type, props }) => {
          const childProps = {
            ref: provided.innerRef,
            ...provided.dragHandleProps,
            ...provided.draggableProps,
          };

          return (
            <Type {...children.props} {...childProps}>
              {props.children}
            </Type>
          );
        })
      }
    </Draggable>
  );
};

const Dnd = { DndWrapper, DndItem };

export default Dnd;
