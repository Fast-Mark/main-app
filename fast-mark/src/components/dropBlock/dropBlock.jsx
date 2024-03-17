import ChooseAligment from "./chooseAligment";
import ChooseLayoutButton from "./chooseLayoutButton";
import ChooseFont from "./chooseFont";
import ChooseFontSize from "./chooseFontSize";
import { imageBlockType, textBlockType } from "../../const/classNameConst";
import TransformImage from "./transformImage";
import ChooseFontStyle from "./chooseFontFormat";
import ChooseColor from "./chooseColor";


export default function DropBlock({parametrs, type, blockPosition, updateContentParams, onUp, onDown}){
    const startTextFormat = {fontWeight: parametrs.fontWeight, fontStyle: parametrs.fontStyle, textDecoration: parametrs.textDecoration}
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

    function updateColor(newColor) {
        updateContentParams({color: newColor})
    }
    
    if (type === textBlockType) {
        return(
            <div className="drop-block" style={blockPosition}>
                <div><ChooseLayoutButton onUp={onUp} onDown={onDown}></ChooseLayoutButton> </div>
                <div><ChooseFont startFont={parametrs.fontFamily} updateContentParams={updateContentParams}></ChooseFont></div>
                <div><ChooseFontSize startFont={parametrs.fontSize} updateContentParams={updateContentParams}></ChooseFontSize> </div>
                <div><ChooseAligment setElementPosition={updateAligment} startPosition={chooseAligment}></ChooseAligment></div>
                <div><ChooseFontStyle updateTextFormant={updateContentParams} startTextFormat={startTextFormat}></ChooseFontStyle></div>
                <div><ChooseColor color={parametrs.color} setColor={updateColor}></ChooseColor> </div>
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