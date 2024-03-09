import { FormControl } from "@mui/base";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";


export default function ChooseFontSize({startSize, updateContentParams}) {
    const [currentSize, setCurrentSize] = useState(startSize)
    
    const allSizes = Array.from({length:10}, (_, index) => index*4+1)

    function handleChange(event) {
        setCurrentSize(event.target.value)
        updateContentParams({fontSize: `${event.target.value}px`})
    }

    return (
        <FormControl>
            <InputLabel>font size</InputLabel>
            <Select
            value={currentSize}
            label={currentSize}
            onChange={(event) => {handleChange(event)}}
            inputProps={{'aria-label': 'Without label'}}
            >
                {allSizes.map((size, index) => {
                    return(
                        <MenuItem key={index} value={size}>{`${size}px`}</MenuItem>
                    )
                })}

            </Select>
        </FormControl>
    )
}