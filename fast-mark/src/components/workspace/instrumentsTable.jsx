import DropBlock from "../dropBlock/dropBlock"
import CreateDynamicBlock from "../dropBlock/workspaceUtils/createDynamicBlock"
import CreateImageBlock from "../dropBlock/workspaceUtils/createImageBlock"
import CreateTextBlock from "../dropBlock/workspaceUtils/createTextBlock"


const defaultInstrumentsTable = [
    <CreateImageBlock></CreateImageBlock> ,

]

export default function InstrumentsTable({ elementsCount, setNewElement, elementToUp, elementToDown, element, updateElement}) {
    
    function updateContentParams(param) {
        updateElement(element.id, param);
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
            <CreateImageBlock newId={elementsCount+1} setNewElement={setNewElement}></CreateImageBlock>
            <CreateTextBlock newId={elementsCount+1} setNewElement={setNewElement}></CreateTextBlock>

            {/* <CreateDynamicBlock newId={elementsCount} setNewElement={setNewElement}></CreateDynamicBlock> */}


            {/* {elementUtils} */}
        {element !== null ? <DropBlock 
                onUp={elementToUp}
                onDown={elementToDown}
                updateContentParams={updateContentParams}
                parametrs={ {...element.contentStyles}}
                type={element.type}>

            </DropBlock>
            : null}
            
        </div>
    )
}