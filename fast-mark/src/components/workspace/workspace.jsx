import { useEffect, useState } from 'react';
import ElementsList from '../elementList/elementsList';
import ElementBlock from '../elementBlock/elementBlock';
import { resizePointClassName, textBlockType } from '../../const/classNameConst';
import './workspace.css'
import { centerPosition } from '../../const/positionTypes';
import WorkspaceDropBlock from '../dropBlock/workspaceUtils/workspaceDropBlock';

// Используется так же в ElementList
let initialElements = [
    { id: '1', content: 'Element 1', type: textBlockType, blockStyle: {left: 0, top: 0, zIndex: 1, width: "100px",  height: "100px"}, isSelected: false, contentStyles: {...centerPosition, fontFamily:"arial", fontSize:'14px'}, },
];

const dragClickType = "drag"
const resizeClickType = "resize"

export default function Workspace({backgroundURL}) {
    const [elements, updateElements] = useState(initialElements);
    const [isDropListActive, setDropListActive] = useState(false)
    const [contextMenu, setContextMenu] = useState(null)
    const [instrumentsTable, setInstrumentsTable] = useState()

    // КУЧА ДЕРЬМА
    let elementCoord = {startX: 0, startY: 0, lastX: 0, lastY: 0,}
    let clickType = null
    let selectedElement = null;
    let isActivatedListners = false

    function activateListners() {
        if (isActivatedListners === false) {
            window.addEventListener("mouseup", (event) => {onMouseUp(event)});
            window.addEventListener('mousemove', (event) => {onMouseMove(event)})
            isActivatedListners = true
        }
    }

    const onMouseUp = (event) => {
        selectedElement = null;
        // Таким образом реализовывается нажатие по элементу
        window.removeEventListener('mousemove', onMouseMove)
    }    
    // Это обработка нажатий на сам элемент.
    function onMouseDown(id, event) {

        selectedElement = id
        
        let currentElement = document.getElementById(id)
        const localClassName = event.target.className;
        try {
            if (localClassName.includes(resizePointClassName)) {
                clickType = resizeClickType;
                
                elementCoord.lastX = currentElement.offsetWidth;
                elementCoord.lastY = currentElement.offsetHeight;

                elementCoord.startX = event.clientX;
                elementCoord.startY = event.clientY;
                activateListners()

            } else {
            clickType = dragClickType

            elementCoord.lastX = currentElement.offsetLeft;
            elementCoord.lastY = currentElement.offsetTop;
            
            elementCoord.startX = event.clientX
            elementCoord.startY = event.clientY    

            activateListners()
        }   
    } catch (e) {
        // localClassName.includes(resizePointClassName) может возваращать фигню, когда localClassName получается от нажатия на svg
        return;
    }
}
// TODO сделать выдвигающуюся панельку по клику.
    
    const onMouseMove = (event) => {
        if (selectedElement === null) return;
        if (clickType === resizeClickType) {
            
            const newElements = elements.map((obj) => {
                if (obj.id === selectedElement) {
                    console.log(elementCoord)
                    let width = `${ Number(elementCoord.lastX) + Number(event.clientX) - Number(elementCoord.startX) }px`;
                    let height = `${ Number(elementCoord.lastY) + Number(event.clientY) - Number(elementCoord.startY) }px`;
                    const newBlockStyle = {...obj.blockStyle, width: width, height: height}

                    return {...obj, blockStyle: newBlockStyle};
                }     
                return obj;
            })    
            updateElements(newElements)
            return;
        }
        
        if (clickType === dragClickType) {
            
            const nextX = event.clientX - elementCoord.startX + elementCoord.lastX;
            const nextY = event.clientY - elementCoord.startY + elementCoord.lastY;  
            
            const newElements = elements.map((obj) => {
                
                if (obj.id === selectedElement) {
                    const newBlockStyle = {...obj.blockStyle, left: nextX, top: nextY}
                    return {...obj, blockStyle:newBlockStyle};
                }     
                return obj;
            })    
            updateElements(newElements)
    
        } 
    }     

   
    function onSelectElement(id) {
        const newElements = elements.map((obj) => {
             if (obj.id === id) {
                 return {...obj, isSelected: true}
             } else {
                 return {...obj, isSelected: false}
             }
         })

        updateElements(newElements);
    }


    const onUpdateElements =(elements)=>{
        updateElements(elements)
    }    

    const onUpdateOneElement =(id, newElement)=>{
        const newElements = elements.map((obj) => {            
            if (obj.id === id) {
                if (newElement===null) {
                    return
                }
                return {...newElement}
            } else {
                return {...obj, isSelected: false}
            }
        })
        updateElements(newElements)
    }    

    

    function onWorkspaceMouseDown(event) {
        if (String(event.target.id) === "redactor" || String(event.target.id) === "workspace" || String(event.target.id) === "redactor-image") {
            onSelectElement("redactor")
            selectedElement = null;
            setDropListActive(false);
            setContextMenu(null)
        } 
        
        const localClassName = String(event.target.className);
        if (localClassName.includes("box") || localClassName.includes("element-block") || String(event.target.className) === "box") {
            setDropListActive(false);
        }
    }
// TODO
    function onRedactorContextMenu(event) {
        event.preventDefault()
        // console.log(JSON.stringify(initialElements))


        const position = {left: event.clientX, top: event.clientY}
        setContextMenu(<WorkspaceDropBlock 
            position={position}  
            elements={elements}
            updateElements={updateElements}
            ></WorkspaceDropBlock>
        )
        // setContextMenu()
        console.log("!!!")
    }

// TODO: какого ххх перестало работать
    function setElementToUp(id) {
        const lastElement = elements.find((obj) => obj.id === id)
        let newElements = new Array();
        elements.map((obj) =>{
            if (obj.id !== id) {
                newElements.push(obj)
            }});

        newElements.push(lastElement)
        console.log(newElements)
        updateElements(newElements)
    }

    function setElementToDown(id) {
        console.log({...elements})
    }

    return (
        <div id='workspace'
         >
            
            <div id = "toolbar">
                {/* здесь будут все полезные инструменты */}

            </div>

            {/* Здесь у нас рендерятся все */}
            <div id ='redactor'
             onMouseDown={(event) => {onWorkspaceMouseDown(event)}}
             onContextMenu={(event) => {onRedactorContextMenu(event)}}
             style={{overflow: 'auto', position:"absolute", height: '100%', width: '100%', }}
             >                
            <img src={`${backgroundURL}`} alt='здесь должен был быть ваш макет' id='redactor-image' className='workspace-redactor__background-image'/>
                <div className='wrokspace-redactor__elements' style={{position:"absolute"}}>
                {elements.map((element, index) => {
                    try {
                        return (
                            <ElementBlock 
                                element={element}
                                setElementToUp={setElementToUp}
                                setElementToDown={setElementToDown}
                                updateElement={onUpdateOneElement}
                                onSelect={onSelectElement} 
                                onDragging={onMouseDown} 
                                setDropListActive={setDropListActive}
                                isActiveDropList={isDropListActive} 
                            >

                            </ElementBlock>
                        )
                    } catch (e) {
                        
                    }
                })}   

                {contextMenu}
                </div>
            </div>
            

            <div style={{background:'aqua', width: '200px', position:'absolute', right:'0'}}>
                <ElementsList elements = {elements} updateElements={onUpdateElements} />
            </div>
            

        </div>
    )
}