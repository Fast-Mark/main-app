import { useState } from "react"
import { WorkWindowType } from "../../const/windowTypes"
import ImageUpload from "../imageUpload"
import { Typography, Icon, Container, Grid} from "@mui/material"


export default function StartWindow({setImageURL, setWindowType}) {
    const [userWarning, setWarning] = useState(null)

    function onImageUpload(url) {
        setImageURL(url)
        setWindowType(WorkWindowType)
    }

    return (
        <>
            <Container sx={{ mt: "6rem"}}>
                <Grid 
                    container 
                    spacing={4}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >

                <Grid item>
                    <div>
                    <Typography
                        variant="h2"
                        component="span"
                        sx={{ flexGrow: 1 }}
                    >
                    Fast Mark
                    </Typography>
                    </div>
                </Grid>
                    
                <Grid item>
                    <div>
                    <Typography
                        variant="h4"
                        component="span"
                        sx={{ flexGrow: 1 }}
                    >
                    This is the simple editor for your documents with your databases.
                    </Typography>
                    </div>
                </Grid>
                    
                <Grid item>
                    <div>
                        <Typography component="span" sx={{ flexGrow: 1 }} variant="h5"> upload image → </Typography>
                        <ImageUpload setImageURL={onImageUpload}></ImageUpload>
                        <div className="start-window__warning">
                            <h2 className="start-window__warning-title">{userWarning}</h2>
                        </div>
                    </div>
                </Grid>
                </Grid>
            </Container>
        </>
    )
}