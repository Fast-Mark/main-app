import { useState } from "react"
import { WorkWindowType } from "../../const/windowTypes"
import ImageUpload from "../imageUpload"
import { Typography, Icon, Container, Grid} from "@mui/material"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


export default function StartWindow({setImageURL, setWindowType}) {
    const [userWarning, setWarning] = useState(null)

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

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
                        
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        setImageURL={onImageUpload}
                    >
                    Upload file
                    <VisuallyHiddenInput type="file" />
                    </Button>
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
//setImageURL={onImageUpload}