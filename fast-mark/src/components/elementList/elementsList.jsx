import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export default function ElementsList({elements, updateElements}) {

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(elements);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateElements(items)
  };

  return (
    <>
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
    >
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="elements">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
              {elements.map((element, index) => (
              <Draggable key={element.id} draggableId={`${element.id}__draggable`} index={index}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  key={element.id}
                  // index меняется при перетягивании!!!
                >
                    {element.id}
                </li>
              )}
              </Draggable>
              ))}
              {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
    </List>
    </>
  );
};

