import { useState } from "react"
import { WorkWindowType } from "../../const/windowTypes"
import ImageUpload from "../imageUpload"
import { Typography, Icon, Container} from "@mui/material"


export default function StartWindow({setImageURL, setWindowType}) {
    const [userWarning, setWarning] = useState(null)

    function onImageUpload(url) {
        setImageURL(url)
        setWindowType(WorkWindowType)
    }

    return (
        <>
            <Container
                sx={{
                    mt: "2rem"
                }}
            >
                    <div>
                    <Typography
                        variant="h4"
                        component="span"
                        sx={{ flexGrow: 1 }}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    </div>
                    
                    <div>
                        <Typography component="span" sx={{ flexGrow: 1 }} variant="h5"> upload image </Typography>
                        <ImageUpload setImageURL={onImageUpload}></ImageUpload>
                        <div className="start-window__warning">
                            <h2 className="start-window__warning-title">{userWarning}</h2>
                        </div>
                    </div>
                    
            </Container>
        </>
    )
}