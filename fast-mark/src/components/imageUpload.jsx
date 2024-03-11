import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function ImageUpload({setImageURL}) {
    function handleImageLoad(event) {
        const file = event.target.files[0]
        // проверка на наличие файла вообще
        if (!file.type) {
            return
        }

        setImageURL(URL.createObjectURL(file))
    }
        

  return (
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          
        >
          <input hidden accept="image/*" type="file" onChange={handleImageLoad}/>
          <PhotoCamera fontSize="large"/>
        </IconButton>
  );
}