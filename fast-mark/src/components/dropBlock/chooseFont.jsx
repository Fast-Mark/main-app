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
    'Arial',
    'Times New Roman',
    'Verdana',
    'Georgia',
    'Tahoma',
    'Trebuchet MS',
    'Lucida Sans Unicode',
    'Lucida Grande',
    'Palatino',
    'Garamond',
    'Bookman',
    'Courier New',
    'Consolas',
    'Monospace',
    'Roboto',
    'Open Sans',
    'Lato',
    'Oswald',
    'Montserrat',
    'Raleway',
    'PT Sans',
    'PT Serif',
    'Source Sans Pro',
    'Source Serif Pro',
    'Noto Sans',
    'Noto Serif',
    'Fira Sans',
    'Fira Code',
    'PT Mono',
    'PT Sans Narrow',
    'PT Serif Caption',
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
            value={""}
            label={currentFont}
            onChange={(event) => {handleChange(event)}}
            inputProps={{ 'aria-label': 'Without label' }}
            >
            
            {fonts.map((font, i) => {
                return (<MenuItem key={i} value={font} > {font} </MenuItem>)
            })}

            </Select>
        </FormControl>
    )
}