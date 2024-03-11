import { useRef } from "react";
import { imageBlockType } from "../../../const/classNameConst";
import { centerPosition } from "../../../const/positionTypes";
import ImageUpload from "../../imageUpload";

export default function CreateImageBlock({newId, setNewElement}) {
    const countImages = useRef(0)
    
    function addNewElement(url) {
        let newItem = {
        id: newId,
        content: url,
        contentStyles: {...centerPosition, width: "100%", height: "100%"},
        type: imageBlockType,
        description: `image ${countImages.current}`,
        }
    
        setNewElement(newItem)
        countImages.current += 1
    }

    return (
        <ImageUpload setImageURL={addNewElement}></ImageUpload>
    )
  }