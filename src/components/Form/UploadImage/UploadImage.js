import React, { Component } from 'react';
import MyEditor from './MyEditor';
/* import AvatarEditor from 'react-avatar-editor'; */
import './UploadImage.css';
import '../Form.css';

import photoupload from '../../../images/picturephoto2.svg';

class ImageUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: '',

            imagePreviewUrl: '',
            width:100,
            height:100,
            border:50,
            scale:1.2,
            allow_scale: false,
            borderRadius:20,

            resultingImage: ''
        };
    }

    _handleSubmit(e) {
        e.preventDefault();
        console.log('handle uploading-', this.state.file);
        if (this.editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            //const canvas = this.editor.getImage()
       
            // If you want the image resized to the canvas size (also a HTMLCanvasElement)
            const canvasScaled = this.editor.getImageScaledToCanvas()
            this.setState({
                resultingImage: canvasScaled.toDataURL()
            });
        }
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    setEditorRef = (editor) => this.editor = editor

    _handleZoomChange(e) {
        this.setState({
            scale: parseInt(e.target.value, 10)
        });
    }

    _handleBorderChange(e){
        this.setState({
            borderRadius: parseInt(e.target.value, 10)
        });
    }
  
    render() {

        let {
            imagePreviewUrl,
            width,
            height,
            border,
            scale,
            borderRadius,
            resultingImage
        } = this.state;

        /*##############################-> IMAGE PREVIEW <-############################# */
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (
                <MyEditor 
                    reference={this.setEditorRef}
                    imagePreviewUrl={imagePreviewUrl}
                    width={width}
                    height={height}
                    border={border}
                    scale={scale}
                    borderRadius={borderRadius}
                />);
        } else {
            $imagePreview = (<div className="previewText"></div>);
        }
        /*############################################################################## */

        /*##############################-> IMAGE RESULT <-############################# */
        let $imageResult = null;
        if (resultingImage) {
            $imageResult = (<img src={resultingImage} alt="Result"/>);
        } else {
            $imageResult = ('');
        }
        /*############################################################################## */

        return (
            <div className="previewComponent">
                <div onSubmit={(e)=>this._handleSubmit(e)}>
                    <div className="input-div">
                        <div /* className="input-div-1" */>
                            {$imagePreview}
                            {$imageResult}
                        </div>
                        <div /* className="input-div-2" */>
                            <label>
                                <input className="boximage" type="file" accept="image/*"  onChange={(e)=>this._handleImageChange(e)}/>
                                <img src={photoupload} alt="adicionarImagem" width="200" className="image-checkbox-img" ></img>
                            </label>
                            {/* <label> Zoom:</label> */}
                            <input type="range" name="scale" min="1" max="10" step="0.1" value={scale} onChange={(e)=>this._handleZoomChange(e)}/>
                        </div>
                    </div>
                    <div /* className="buttons-form" */>
                        <div /* className="next-div" */>
                            <button /* className="submitButton" */ type="submit" onClick={(e)=>this._handleSubmit(e)}>Carregar Imagem</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  }

export default ImageUpload;
