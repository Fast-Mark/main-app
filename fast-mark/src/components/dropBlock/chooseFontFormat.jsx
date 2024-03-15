import { useState } from "react"
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function ChooseFontStyle({updateTextFormant, startTextFormat}){
  const [formats, setFormats] = useState(() => [startTextFormat.fontWeight, startTextFormat.fontStyle, startTextFormat.textDecoration]);
  const [isBold, setBold] = useState(startTextFormat.fontWeight)
  const [isItalic, setItalic] = useState(startTextFormat.fontStyle)
  const [isUnderlined, setUnderlined] = useState(startTextFormat.textDecoration)

    function setBoldFormat(){
      if (isBold === undefined || isBold === "normal"){
        console.log(isBold)
        updateTextFormant({fontWeight:"bold"})
        setBold("bold")
        return
      }
      updateTextFormant({fontWeight:"normal"})
      setBold("normal")
    }

    function setItalicFormat(){
      if (isItalic === undefined || isItalic === "normal"){
        updateTextFormant({fontStyle:"italic"})
        setItalic("italic")
        return
      }
      console.log(isItalic)
      updateTextFormant({fontStyle:"normal"})
      setItalic('normal')
    }

    function setUnderlineFormat(){
      if (isUnderlined === undefined || isUnderlined === "none"){
        updateTextFormant({textDecoration:"underline"})
        setUnderlined("underline")
        return
      }
      updateTextFormant({textDecoration:"none"})
      setUnderlined("none")
    }

    const handleFormat = (event, newFormats) => {
      setFormats(newFormats);
    };

  return (
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" onClick={setBoldFormat} aria-label="left aligned">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="underline" onClick={setUnderlineFormat} aria-label="centered">
            <TextFormatIcon />
        </ToggleButton>
        <ToggleButton value="italic" onClick={setItalicFormat} aria-label="right aligned">
          <FormatItalicIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    )
}