import { useState } from "react"
import ToggleButtons from "./toggleButton";
import ChooseLayoutButton from "./chooseLayoutButton";
import ChooseFont from "./chooseFont";
import ChooseFontSize from "./chooseFontSize";
import { imageBlockType, textBlockType } from "../../const/classNameConst";
import TransformImage from "./transformImage";


export default function DropBlock({parametrs, type, blockPosition, updateContentParams, updateBlockParams, onUp, onDown}){


    function updateAligment(newAlignment) {
        if (newAlignment ==="right"){
            updateContentParams({display:"block", marginRight: "0",  marginLeft: "auto"})
        } else if (newAlignment === "left") {
            updateContentParams({display:"block", marginLeft: "0", marginRight: "auto"})
        } else if (newAlignment ==="center") {
            updateContentParams({display:"block", marginLeft: "auto", marginRight: "auto"})
        }
    }

    function chooseAligment() {
        if (parametrs.marginLeft === "0" & parametrs.marginRight === "auto"  ) {
            return "left"
        } else if (parametrs.marginLeft === "auto" & parametrs.marginRight === "0") {
            return "right"
        } else if (parametrs.marginLeft === "auto" & parametrs.marginRight === "auto" ) {
            return "center"
        }
    } 

    console.log(parametrs)
    if (type === textBlockType) {
        return(
            <ul className="drop-block" style={blockPosition}>
                <li><ChooseLayoutButton onUp={onUp} onDown={onDown}></ChooseLayoutButton> </li>
                <li><ChooseFont startFont={parametrs.fontFamily} updateContentParams={updateContentParams}></ChooseFont></li>
                <li> <ChooseFontSize startFont={parametrs.fontSize} updateContentParams={updateContentParams}></ChooseFontSize> </li>
                <li><ToggleButtons setElementPosition={updateAligment} startPosition={chooseAligment}></ToggleButtons></li>
                <li>text color: </li>
            </ul>
        )
    } else if (type === imageBlockType) {
        return (
            <ul className="drop-block" style={blockPosition}>
                <li><ChooseLayoutButton onUp={onUp} onDown={onDown}></ChooseLayoutButton> </li>
                <li><TransformImage updateContentParams={updateContentParams}></TransformImage></li>
            </ul>
        )
    }
}