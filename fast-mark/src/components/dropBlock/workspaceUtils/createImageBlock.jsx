import { imageBlockType } from "../../../const/classNameConst";
import { centerPosition } from "../../../const/positionTypes";
import ImageUpload from "../../imageUpload";

export default function CreateImageBlock({newId, setNewElement}) {
    
    function addNewElement(url) {
        let newItem = {
        id: newId,
        content: <img style={{objectFit: "cover", width: "100%", height: "100%"}} src={url} />,
        contentStyles: {...centerPosition, width: "100%", height: "100%"},
        type: imageBlockType,
        }
    
        setNewElement(newItem)
    }

    return (
        <ImageUpload setImageURL={addNewElement}></ImageUpload>
    )
  }