import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";


export default function ChooseLayoutButton({onUp, onDown}) {
    // const [toUpLoyout, choosLayout] = useState(false)
    return (
        <ButtonGroup style={{width:"100%"}} color="primary" >
            <Button style={{width:"100%"}} onClick={onUp}>up</Button>
            <Button style={{width:"100%"}} onClick={onDown}>down</Button>
        </ButtonGroup>
    )
}