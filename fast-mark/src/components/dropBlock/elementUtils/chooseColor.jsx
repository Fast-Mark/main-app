import { Input } from "@mui/material";
import { HexColorPicker } from "react-colorful";


export default function ChooseColor({color, setColor}) {

    function handleChange(value) {
        setColor(value)
    }

    return (
        <div className="drop-block__choose-color">
            <HexColorPicker color={color} onChange={handleChange} />
            <Input value={color} onChange={(event) => {handleChange(event.target.value)}}>  </Input>
        </div>
    )
}