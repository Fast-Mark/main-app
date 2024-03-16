import { useEffect, useState } from "react"
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function ChooseFontStyle({updateTextFormant, startTextFormat}){
  const [formats, setFormats] = useState(() => []);
  const [isBold, setBold] = useState(startTextFormat.fontWeight===undefined ? false : true)
  const [isItalic, setItalic] = useState(startTextFormat.fontStyle)
  const [isUnderlined, setUnderlined] = useState(startTextFormat.textDecoration)

  useEffect(() => {
    // setFormats([startTextFormat.fontWeight, startTextFormat.fontStyle, startTextFormat.textDecoration])
    console.log(startTextFormat.fontWeight)
    if (startTextFormat.fontWeight===undefined || startTextFormat.fontWeight==="normal") {
      setBold(false)
    } else {
      setBold(true)
    }
  }, [startTextFormat])

    function setBoldFormat(){
      console.log(isBold)
      if (isBold === false){
        console.log(isBold)
        updateTextFormant({fontWeight:"bold"})
        setBold(true)
        return
      }
      updateTextFormant({fontWeight:"normal"})
      setBold(false)
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
      console.log(newFormats)
      setFormats(newFormats);
    };

  return (
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton selected={isBold} value="bold" onClick={setBoldFormat} aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="underline" onClick={setUnderlineFormat} aria-label="underline">
            <TextFormatIcon />
        </ToggleButton>
        <ToggleButton value="italic" onClick={setItalicFormat} aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    )
}