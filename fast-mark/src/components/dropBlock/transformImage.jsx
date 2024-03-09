import { Button, ButtonGroup } from "@mui/material"
import { useRef } from "react"


export default function TransformImage({updateContentParams}) {
    const transformingRef = useRef(0)

    function handleClick() {
        updateContentParams({transform: `rotate(${transformingRef.current}deg)`})
        transformingRef.current += 90
    }

    return (
        <ButtonGroup color="primary" >
            <Button onClick={handleClick}>развернуть</Button>
        </ButtonGroup>
    )
}