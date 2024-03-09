import { useTheme } from "@mui/material";
import { useState } from "react"
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const fonts = [
    'times new roman',
    'arial', 
    'canva',
]

  

export default function ChooseFont({startFont, updateContentParams}) {
    const [currentFont, setCurrentFont] = useState(startFont)

    function handleChange(event) {
        setCurrentFont(event.target.value)
        updateContentParams({fontFamily: event.target.value})
    }

    return (
        <FormControl>
            <InputLabel >{startFont}</InputLabel>
            <Select
            value={currentFont}
            label={currentFont}
            onChange={(event) => {handleChange(event)}}
            inputProps={{ 'aria-label': 'Without label' }}
            >
            
            {fonts.map((font, i) => {
                return (<MenuItem key={i} value={font} >{font}</MenuItem>)
            })}

            </Select>
        </FormControl>
    )
}