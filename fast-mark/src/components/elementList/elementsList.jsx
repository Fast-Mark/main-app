import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { centerPosition } from "../../const/positionTypes";
import { imageBlockType, textBlockType } from "../../const/classNameConst";
import ImageUpload from "../imageUpload";


export default function ElementsList({elements, updateElements}) {
  
  const [text, setText] = React.useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(elements);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateElements(items)
  };


  function createTextBlock(){
    let items = Array.from(elements);
    let newId = (items.length + 1).toString();

    let newItem = {
      id: newId,
      content: text,
      contentStyles: {...centerPosition, fontFamily:"arial", fontSize:'14px'},
      type: textBlockType,
    }
  
    items.push(newItem);

    // console.log(newItem);

    updateElements(items)
  }

  function createImageBlock(url) {
    console.log(url, 'dddd')
    let items = Array.from(elements);
    let newId = (items.length + 1).toString();

    let newItem = {
      id: newId,
      content: <img style={{objectFit: "cover", width: "100%", height: "100%"}} src={url} />,
      contentStyles: {...centerPosition, width: "100%", height: "100%"},
      type: imageBlockType,
    }
  
    items.push(newItem);

    // console.log(newItem);

    updateElements(items)
  }


  function addNewElement() {
    let items = Array.from(elements);
    let newId = (items.length + 1).toString();

    let newItem = {
      id: newId, content: 'Element 1', type: text,
      blockStyle: {left: 0, top: 0, zIndex: newId, width: "100px",  height: "100px"},
      isSelected: false, contentStyles: centerPosition,
    }

    items.push(newItem);
  }

  function removeToEnd(id) {
    
  }


  return (
    <>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="elements">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((element, index) => (
              <Draggable key={element.id} draggableId={element.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
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
      {/* TODO: вынести функционал добавления элементов в отдельный компонент */}
      <>
      <button  onClick={createTextBlock}>render text</button>
      <ImageUpload setImageURL={createImageBlock}></ImageUpload>
      <input value={text} onChange={handleChange} />
        <p>You typed: {text}</p>
        <button onClick={addNewElement}>
          add
        </button>
      </>

    </>
  );
};