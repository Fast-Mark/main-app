import { Button } from "@mui/material"
import { centerPosition } from "../../../const/positionTypes";
import { textBlockType } from "../../../const/classNameConst";
import { useRef } from "react";


export default function CreateTextBlock({newId, setNewElement}){

    function addNewTextElement() {
        let newItem = {
        id: newId,
        content: "none",
        contentStyles: {...centerPosition, fontFamily:"arial", fontSize:'14px'},
        type: textBlockType,
        }
    
        setNewElement(newItem)
    }

    return (
        // TODO: сделать красиво с MUI
        <Button onClick={addNewTextElement}>добавить текст</Button>
    )
  }