import CreateDynamicBlock from "../dropBlock/workspaceUtils/createDynamicBlock"
import CreateImageBlock from "../dropBlock/workspaceUtils/createImageBlock"
import CreateTextBlock from "../dropBlock/workspaceUtils/createTextBlock"


const defaultInstrumentsTable = [
    <CreateImageBlock></CreateImageBlock> ,

]

export default function InstrumentsTable({elementsCount, setNewElement, elementUtils}) {


    return (
        <div>
            <CreateImageBlock newId={elementsCount+1} setNewElement={setNewElement}></CreateImageBlock>
            <CreateTextBlock newId={elementsCount+1} setNewElement={setNewElement}></CreateTextBlock>

            {/* <CreateDynamicBlock newId={elementsCount} setNewElement={setNewElement}></CreateDynamicBlock> */}

            {elementUtils}
        </div>
    )
}