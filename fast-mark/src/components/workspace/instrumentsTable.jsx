import DownloadResult from "../downloadResult";
import DropBlock from "../dropBlock/dropBlock";
import CreateDynamicBlock from "../workspaceUtils/createDynamicBlock"
import CreateImageBlock from "../workspaceUtils/createImageBlock"
import CreateTextBlock from "../workspaceUtils/createTextBlock"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const defaultInstrumentsTable = [
    <CreateImageBlock></CreateImageBlock> ,

]

export default function InstrumentsTable({element, elementsCount, setNewElement, setElementToUp, setElementToDown, updateElement, selectElement}) {
    
    function updateContentParams(param) {
        updateElement(element.id, param);
    }

    function elementToUp() {
        setElementToUp(element.id)
    }

    function elementToDown() {
        setElementToDown(element.id)
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
            <ButtonGroup>
            <CreateImageBlock newId={elementsCount+1} setNewElement={setNewElement}></CreateImageBlock>
            <CreateTextBlock newId={elementsCount+1} setNewElement={setNewElement}></CreateTextBlock>
            </ButtonGroup>

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
        
            <DownloadResult cleanSelectedElement={selectElement}></DownloadResult>
        </div>
    )
}