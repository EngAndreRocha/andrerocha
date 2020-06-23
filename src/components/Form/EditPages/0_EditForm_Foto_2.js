import React, { Component, createRef }  from 'react';

class ImageInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.imageInput = createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${
        this.imageInput.current.files[0].name + "  " + this.imageInput.current.name
      }`
    );
  }

  render() {
    return (
      <form className="file-upload-div" onSubmit={this.handleSubmit}>
        <label>
          Carregar {this.props.name}: 
          <input name={this.props.name} type="file" ref={this.imageInput} accept="image/*"/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ImageInput;






import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Button, Form, Message, Card, Image, Grid } from "semantic-ui-react";

class SimpleForm extends React.Component {
  static propTypes = {
    previewLogoUrl: PropTypes.string,
    mimeType: PropTypes.string,
    maxWeight: PropTypes.number,
    maxWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    // redux-form porps
    handleSubmit: PropTypes.func.isRequired
  };
  static defaultProps = {
    previewLogoUrl: "https://imgplaceholder.com/400x300",
    mimeType: "image/jpeg, image/png",
    maxWeight: 100,
    maxWidth: 100,
    maxHeight: 100
  };
  validateImageWeight = imageFile => {
    if (imageFile && imageFile.size) {
      // Get image size in kilobytes
      const imageFileKb = imageFile.size / 1024;
      const { maxWeight } = this.props;

      if (imageFileKb > maxWeight) {
        return `Image size must be less or equal to ${maxWeight}kb`;
      }
    }
  };
  validateImageWidth = imageFile => {
    if (imageFile) {
      const { maxWidth } = this.props;

      if (imageFile.width > maxWidth) {
        return `Image width must be less or equal to ${maxWidth}px`;
      }
    }
  };
  validateImageHeight = imageFile => {
    if (imageFile) {
      const { maxHeight } = this.props;

      if (imageFile.height > maxHeight) {
        return `Image height must be less or equal to ${maxHeight}px`;
      }
    }
  };
  validateImageFormat = imageFile => {
    if (imageFile) {
      const { mimeType } = this.props;

      if (!mimeType.includes(imageFile.type)) {
        return `Image mime type must be ${mimeType}`;
      }
    }
  };
  handlePreview = imageUrl => {
    const previewImageDom = document.querySelector(".preview-image");
    previewImageDom.src = imageUrl;
  };
  handleChange = (event, input) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();

      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
      this.handlePreview(localImageUrl);
    }
  };
  renderFileInput = ({ input, type, meta }) => {
    const { mimeType } = this.props;
    return (
      <div>
        <input
          name={input.name}
          type={type}
          accept={mimeType}
          onChange={event => this.handleChange(event, input)}
        />
        {meta && meta.invalid && meta.error && (
          <Message negative header="Error:" content={meta.error} />
        )}
      </div>
    );
  };
  handleSubmitForm = values => {
    console.log("Form Values: ", values);
  };
  render() {
    const {
      previewLogoUrl,
      maxWidth,
      maxHeight,
      maxWeight,
      handleSubmit
    } = this.props;
    return (
      <Grid centered style={{ height: "100%" }} verticalAlign="middle" padded>
        <Grid.Column style={{ maxWidth: 400 }}>
          <Card fluid>
            <Image
              src={previewLogoUrl}
              alt="preview"
              className="preview-image"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <Card.Content>
              <Card.Header>Redux Form: Image Validation</Card.Header>
              <Card.Meta>Form Meta</Card.Meta>
              <Card.Description>
                Image has to:
                <ul>
                  <li>be JPEG or PNG</li>
                  <li>have Width ≤ {maxWidth}px</li>
                  <li>have Height ≤ {maxHeight}px</li>
                  <li>have Size ≤ {maxWeight}kb</li>
                </ul>
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Form>
                <Form.Field>
                  <Field
                    name="image"
                    type="file"
                    validate={[
                      this.validateImageWeight,
                      this.validateImageWidth,
                      this.validateImageHeight,
                      this.validateImageFormat
                    ]}
                    component={this.renderFileInput}
                  />
                </Form.Field>
                <Button
                  primary
                  type="submit"
                  className="form-submit-button"
                  onClick={handleSubmit(this.handleSubmitForm)}
                >
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default reduxForm({
  form: "simple"
})(SimpleForm);




