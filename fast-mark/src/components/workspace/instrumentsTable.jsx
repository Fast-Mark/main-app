import DropBlock from "../dropBlock/dropBlock";
import CreateDynamicBlock from "../workspaceUtils/createDynamicBlock"
import CreateImageBlock from "../workspaceUtils/createImageBlock"
import CreateTextBlock from "../workspaceUtils/createTextBlock"


const defaultInstrumentsTable = [
    <CreateImageBlock></CreateImageBlock> ,

]

export default function InstrumentsTable({element, elementsCount, setNewElement, elementToUp, elementToDown, updateElement}) {
    
    function updateContentParams(param) {
        updateElement(element.id, param);
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
            <CreateImageBlock newId={elementsCount+1} setNewElement={setNewElement}></CreateImageBlock>
            <CreateTextBlock newId={elementsCount+1} setNewElement={setNewElement}></CreateTextBlock>

            {/* <CreateDynamicBlock newId={elementsCount} setNewElement={setNewElement}></CreateDynamicBlock> */}


        {element !== null ? 
            <DropBlock
                onUp={elementToUp}
                onDown={elementToDown}
                updateContentParams={updateContentParams}
                parametrs={element.contentStyles}
                type={element.type}>
            </DropBlock>
            : null}
            
        </div>
    )
}