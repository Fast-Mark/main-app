import { useEffect, useRef, useState } from "react"
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function compareFormat(format) {
  return !(format === undefined || format === "normal" || format === "none")
}


export default function ChooseFontStyle({updateTextFormant, startTextFormat}){
  const [formats, setFormats] = useState(() => []);
  const isBold = useRef(false)
  const isItalic = useRef(false)
  const isUnderlined= useRef(false)

  useEffect(() => {

    // console.log([startTextFormat.fontStyle, startTextFormat.fontWeight, startTextFormat.textDecoration])s
    setFormats([startTextFormat.fontStyle, startTextFormat.fontWeight, startTextFormat.textDecoration])
    isBold.current = compareFormat(startTextFormat.fontWeight)
    isItalic.current = compareFormat(startTextFormat.fontStyle)
    isUnderlined.current = compareFormat(startTextFormat.textDecoration)

    // setBold(compareFormat(startTextFormat.fontWeight))
    // setItalic(compareFormat(startTextFormat.fontStyle))
    // setUnderlined(compareFormat(startTextFormat.textDecoration))

  }, [startTextFormat])

    function setBoldFormat(){ 
      if (!isBold.current){
        updateTextFormant({fontWeight:"bold"})
        isBold.current = true
        return
      }
      updateTextFormant({fontWeight:"normal"})
      isBold.current = false
    }

    function setItalicFormat(){
      if (!isItalic.current){
        updateTextFormant({fontStyle:"italic"})
        isItalic.current = true
        return
      }
      updateTextFormant({fontStyle:"normal"})
      isItalic.current = false
    }

    function setUnderlineFormat(){
      if (!isUnderlined.current){
        updateTextFormant({textDecoration:"underline"})
        isUnderlined.current = true
        return
      }
      updateTextFormant({textDecoration:"none"})
      isUnderlined.current = false
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
        <ToggleButton value="bold" onClick={setBoldFormat} aria-label="bold">
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