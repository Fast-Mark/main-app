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

    if (type === textBlockType) {
        return(
            <div className="drop-block" style={blockPosition}>
                <div><ChooseLayoutButton onUp={onUp} onDown={onDown}></ChooseLayoutButton> </div>
                <div><ChooseFont startFont={parametrs.fontFamily} updateContentParams={updateContentParams}></ChooseFont></div>
                <div><ChooseFontSize startFont={parametrs.fontSize} updateContentParams={updateContentParams}></ChooseFontSize> </div>
                <div><ToggleButtons setElementPosition={updateAligment} startPosition={chooseAligment}></ToggleButtons></div>
                <div>text color: </div>
            </div>
        )
    } else if (type === imageBlockType) {
        return (
            <div className="drop-block" style={blockPosition}>
                <div><ChooseLayoutButton onUp={onUp} onDown={onDown}></ChooseLayoutButton> </div>
                <div><TransformImage updateContentParams={updateContentParams}></TransformImage></div>
            </div>
        )
    }
}