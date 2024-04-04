import { Button } from "@mui/material"
import { centerPosition } from "../../const/positionTypes";
import { textBlockType } from "../../const/classNameConst";


export default function CreateTextBlock({newId, setNewElement}){

    function addNewTextElement() {
        let newItem = {
        id: newId,
        content: "none",
        contentStyles: {...centerPosition, textAlign:"center", fontFamily:"arial", fontSize:'14px',color:"#000000"},
        type: textBlockType,
        description: "none"
        }
    
        setNewElement(newItem)
    }

    return (
        // TODO: сделать красиво с MUI
        <Button onClick={addNewTextElement}>add text</Button>
    )
  }