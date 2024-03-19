import { Button } from "@mui/material";


export default function DownloadResult( ) {

    function createScreenshot() {
        html2canvas()
    }

    return (
        <Button variant="conteined" onClick={createScreenshot}>
            получить результат
        </Button>
    )
}