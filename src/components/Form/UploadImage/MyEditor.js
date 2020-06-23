import React/* , { Component }  */from 'react';
import AvatarEditor from 'react-avatar-editor';


const MyEditor = ({ imagePreviewUrl,
                    width,
                    height,
                    border,
                    scale,
                    borderRadius,
                    reference
                }) => {
                   
    return (
        <div>
            <AvatarEditor
                ref={reference}
                image= {imagePreviewUrl}
                alt="Alternative Image"
                width={width}
                height={height}
                border={border}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={scale}
                rotate={0}
                borderRadius={borderRadius}
                id="preview_image"
            />
        </div>
    )
}
 
export default MyEditor


 