import "./elementBlock.css"
import BorderBlock from "../choosenElementMask/borderBlock";
import { useState, useRef  } from "react";
import ResizePoint from "../choosenElementMask/resizePoint";
import DropBlock from "../dropBlock/dropBlock";
import { imageBlockType, textBlockType } from "../../const/classNameConst";
import zIndex from "@mui/material/styles/zIndex";



export default function ElementBlock({element, zIndexElement, updateElement, onDragging, isActiveDropList, setDropListActive, onSelect, setElementToUp, setElementToDown, setDropBlock}) {
    const dropListPositionRef = useRef({left:0,top:0})

    function onSelectElement() {
        onSelect(element.id)
        setDropBlock(
            <DropBlock 
                updateBlockParams={updateBlockParams}
                onUp={elementToUp}
                onDown={elementToDown}
                updateContentParams={updateContentParams}
                parametrs={ {...element.contentStyles}}
                type={element.type}>
            </DropBlock>
        )
    }
    
    function updateContentParams(param) {
        const styles = {...element.contentStyles};
        const newContentStyles = Object.assign(styles, param);
        const newElement = {...element}
        newElement.contentStyles = newContentStyles;
        updateElement(element.id, newElement);
    }

    function updateBlockParams(param) {
        const styles = {...element.blockStyle}
        const newBlockStyle = {...styles, param};
        const newElement = {...element}
        newElement.blockStyle = newBlockStyle;
        updateElement(element.id, newElement);
    }

    function deleteElement() {
        updateElement(element.id, null)
    }

    function handleRightClick(event) {
        event.preventDefault()
        const x = event.clientX
        const y = event.clientY
        dropListPositionRef.current = {left: `${x}px`, top: `${y}px`}
        setDropListActive(true)
        
    }

    function elementToUp() {
        setElementToUp(element.id)
    }

    function elementToDown() {
        setElementToDown(element.id)
    }

    function handleTextChange(newText) {
        const newElement = {...element}
        newElement.content = newText
        newElement.description = newText
        updateElement(element.id, newElement)
    }

    if (element.isSelected) {
        return (
            <div className={"element-block box"}  id = {element.id} 
            style={{...element.blockStyle, zIndex   :`${zIndexElement}`}}
            onContextMenu={(event) => {handleRightClick(event)}}
            onMouseDown={(event) => {onDragging(element.id, event)}} 
            key={element.id}
            >
            {isActiveDropList ? <DropBlock 
                updateBlockParams={updateBlockParams}
                onUp={elementToUp}
                onDown={elementToDown}
                updateContentParams={updateContentParams}
                parametrs={ {...element.contentStyles}}
                type={element.type}
                blockPosition={{position: "fixed", zIndex: "999", ...dropListPositionRef.current}}></DropBlock>: null}

                <div className="box " style={element.contentStyles}>
                    {
                        element.type === imageBlockType ? (
                            <img style={{objectFit: "cover", width: "100%", height: "100%"}} src={element.content}/>
                        ) :
                        <input type="text" value={element.content} onChange={(event) => {handleTextChange(event.target.value)}}></input>
                    }
                </div> 

                <BorderBlock></BorderBlock>
                <ResizePoint></ResizePoint>
            </div>
        )} 
    else {
        return (
        <div key={element.id} className="element-block" id = {element.id} style={element.blockStyle} >

            <div className="box " 
            onMouseDown={onSelectElement} 
            style={{...element.contentStyles, zIndex:`${zIndexElement}`}}             
            
            >
                    {
                        element.type === imageBlockType ? (
                            <img style={{objectFit: "cover", width: "100%", height: "100%"}} src={element.content}/>
                        ) :
                        element.content
                    }
            </div>

        </div>
        )
    }
}