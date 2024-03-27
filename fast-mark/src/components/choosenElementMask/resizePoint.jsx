import React from 'react';
import { resizePointClassName } from '../../const/classNameConst';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import './resizePoints.css';

export default function ResizePoint() {

    return (
        <>
            <div className={`${resizePointClassName} right-buttom-point`}>
                
            </div>
            {/* <DragIndicatorIcon className={`${resizePointClassName} right-buttom-point`}></DragIndicatorIcon> */}
        </>
    )
}
