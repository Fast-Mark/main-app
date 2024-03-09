import { useState } from "react"
import { WorkWindowType } from "../../const/windowTypes"
import ImageUpload from "../imageUpload"


export default function StartWindow({setImageURL, setWindowType}) {
    const [userWarning, setWarning] = useState(null)

    function onImageUpload(url) {
        setImageURL(url)
        setWindowType(WorkWindowType)
    }

    return (
        <>
            <div className="start-window">
                <div className="strart-window__description">
                    <h2 className="start-window__user-greeting">
                        FastMark - генератор грамот
                    </h2>
                    <p className="start-window__description-text">
                        Вас приветствует автоматизатор для создания грамот. 
                        Я умею автоматически заполнять большое количество документов, 
                        вставляя нужные данные из таблицы в помеченную область.
                    </p>
                    <p className="start-window__description-text">
                       Для пользования мною нужно ...
                       {/* TODO: сделать инструкцию */}
                    </p>
                </div>
                <label> загрузи изображение </label>
                <ImageUpload setImageURL={onImageUpload}></ImageUpload>
                <div className="start-window__warning">
                    <h2 className="start-window__warning-title">{userWarning}</h2>
                </div>
            </div>
        </>
    )
}