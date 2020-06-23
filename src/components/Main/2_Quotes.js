import React, { Component } from 'react';
import { connect } from 'react-redux';
import {    
    CycleSlideshow,
    Setup_Quotes,
    Update_Quotes
} from '../../actions';

import './2_Quotes.css'; 

import ToggleVisibilityButton from '../../components/Buttons/ToggleVisibility';
import Edit from '../../images/edit-1.svg';

const mapStateToProps = (state) => {
    return {
        img_list: state.CycleSlideshow.img_list,
        img_index: state.CycleSlideshow.img_index,
        quote_index: state.CycleSlideshow.quote_index,
        quote_list: state.CycleSlideshow.quote_list,
        quotesdata: state.Quotes.quotesdata,
        isPending: state.Quotes.isPending,
        error: state.Quotes.error
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        oncycleslideshow: () => dispatch(CycleSlideshow()),
        onSetup_Quotes: () => dispatch(Setup_Quotes()),
        handle_PresentationForm_Submit: values => dispatch(Update_Quotes(values))
    }
  }

  class Quotes extends Component {
    
    state = {
        timer:0
    }

    componentDidMount(){
        let timer = setInterval( this.props.oncycleslideshow , 3000 );
        this.setState({timer});
        this.props.onRequest_Quotes();
        this.props.onSetup_Quotes();
    }
    
    componentWillUnmount() {clearInterval(this.state.timer);}

    render(){

        const {
            img_list,
            img_index,
            quote_list,
            quote_index,
            isPending/* ,
            error,
            quotesdata */
        } = this.props;

        return isPending ? <h1> </h1> : (
                <div className="quotes-div" id="quotes-div">
                    <div className="slideshow-container">
                        <div className="mySlides fade" id="slide1">
                            <img className="slideimage" alt="example_image1" src={img_list[img_index]} ></img>
                            <div className="overlay"></div>
                            <div className="quote">{quote_list[quote_index]}</div>
                        </div>
                        <ToggleVisibilityButton imgsrc={Edit} name="quotes_input_edit_button" index={3}>
                                    <p>Edit Quotes!</p>
                        </ToggleVisibilityButton>
                    </div>
                </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
