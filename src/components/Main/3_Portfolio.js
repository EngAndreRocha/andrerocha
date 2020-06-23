import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ChangeRoute,
  Setup_Portfolio,
  Setup_Portfolio_Title,
  Update_Portfolio_And_Title,
  Delete_Event,
  Update_Event_Image
} from '../../actions';

import VCardGallery from '../Cards/VCardGallery';
import More from '../Buttons/More';

import './3_Portfolio.css'; 

/* import ToggleVisibilityButton from '../../components/Buttons/ToggleVisibility';
import Edit from '../../images/edit-1.svg'; */

const mapStateToProps = (state) => {
  return {
    portfoliodata: state.Portfolio.portfoliodata,
    isPending_portfoliodata: state.Portfolio.isPending,
    error_portfoliodata: state.Portfolio.error,
    portfolio_title: state.Portfolio_Title.portfolio_title,
    isPending_portfolio_title: state.Portfolio_Title.isPending,
    error_portfolio_title: state.Portfolio_Title.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (text, id) => dispatch(ChangeRoute(text, id)),
    onDeleteEvent: (id, number) => dispatch(Delete_Event(id, number)),
    onSetup_Portfolio: () => dispatch(Setup_Portfolio()),
    onSetup_Portfolio_Title: () => dispatch(Setup_Portfolio_Title()),
    handle_PresentationForm_Submit: values => dispatch(Update_Portfolio_And_Title(values)),
    onMySubmit: values => dispatch(Update_Event_Image(values))
  }
}

class Portfolio extends Component {

  componentDidMount() {
    this.props.onSetup_Portfolio();
    this.props.onSetup_Portfolio_Title();
  }

  render() {

    const { 
      onRouteChange,
      onDeleteEvent,
      onMySubmit,
      isPending_portfoliodata,
      /* error_portfoliodata, */
      portfoliodata,
      isPending_portfolio_title,
      /* error_portfolio_title, */
      portfolio_title
    } = this.props;


    return (isPending_portfoliodata && isPending_portfolio_title) ? <h1> </h1> : (
          <div className="portfolio-div" id="portfolio-div">
            <div className="portfolio-description">
              <h1 className="title-portfolio">{(portfolio_title.length > 0) ? (portfolio_title[0].title_portfolio) : (" ")}</h1>
              {(portfoliodata.length > 0) ? <VCardGallery vcarddata={portfoliodata} onRouteChange={onRouteChange} onDeleteEvent={onDeleteEvent} onMySubmit={onMySubmit}/> : (" ")} {/* Precisa de carregar os ultimos 5 eventos (foto_principal's, nome's, data's) */}
              <button onClick={() => onRouteChange('PageEventList',0)}>{<More id="more_eventos"/>}</button>  {/* Link para a listagem dos eventos todos com searchbar em cima*/}
            </div>
          </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
