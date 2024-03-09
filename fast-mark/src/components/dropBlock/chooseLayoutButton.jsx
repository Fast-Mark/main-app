import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";


export default function ChooseLayoutButton({onUp, onDown}) {
    // const [toUpLoyout, choosLayout] = useState(false)
    return (
        <ButtonGroup color="primary" >
            <Button onClick={onUp}>up</Button>
            <Button onClick={onDown}>down</Button>
        </ButtonGroup>
    )
}