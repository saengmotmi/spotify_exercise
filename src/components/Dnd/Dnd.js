import React, { Children } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
  DraggableProvided,
} from "react-beautiful-dnd";

// interface DndItemProps {
//   children: React.ReactNode;
//   handleChange: (result: DropResult, provided: ResponderProvided) => void;
// }

export function DndWrapper({ children, handleChange }) {
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
}

// interface DndItemProps {
//   index: number;
//   id: string;
//   children: React.ReactNode;
// }

export function DndItem({ index, id, children }) {
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
            <Type {...children?.props} {...childProps}>
              {props.children}
            </Type>
          );
        })
      }
    </Draggable>
  );
}

const Dnd = { DndWrapper, DndItem };

export default Dnd;
