import React, { Component } from 'react';
import { connect } from 'react-redux';
import {useRoutes,navigate} from 'hookrouter';
import {
    ChangeRoute,
    SignInAdmin
} from '../actions';

import routes from './Router';
import AsyncComponent from './AsyncComponent';


const mapStateToProps = (state) => {
    return {
        route: state.ChangeRoute.route,
        id: state.ChangeRoute.id
    }
  }
  

  const mapDispatchToProps = (dispatch) => {
    return {
        onRouteChange: (text, id) => dispatch(ChangeRoute(text, id)),
        checkSignIn: () => dispatch(SignInAdmin())
    }
  }

function MyRouter() {
    const routeResult = useRoutes(routes);
    return routeResult || navigate('/');
}

class Content extends Component {

    componentDidMount(){
        this.props.checkSignIn();
    }

    render(){

        const {route, onRouteChange} = this.props;

        if(route === 'PageJobs') {
            const AsyncPageJobs = AsyncComponent(()=> import('./PageJobs'));
            return <AsyncPageJobs onRouteChange={onRouteChange} />
        } else if(route === 'PagePrivacyPolicy') {
            const AsyncPagePrivacyPolicy = AsyncComponent(()=> import('./PagePrivacyPolicy'));
            return <AsyncPagePrivacyPolicy onRouteChange={onRouteChange} />
        } else if(route === 'PageConditionsOfUse') {
            const AsyncPageConditionsOfUse = AsyncComponent(()=> import('./PageConditionsOfUse'));
            return <AsyncPageConditionsOfUse onRouteChange={onRouteChange} />
        } else if(route === 'PageCookies') {
            const AsyncPageCookies = AsyncComponent(()=> import('./PageCookies'));
            return <AsyncPageCookies onRouteChange={onRouteChange} />
        } else if(route === 'PageAndreRocha') {
            const AsyncPageAndreRocha = AsyncComponent(()=> import('./PageAndreRocha'));
            return <AsyncPageAndreRocha onRouteChange={onRouteChange} />
        } else if(route === 'PageEventList') {
            const AsyncPageEventList = AsyncComponent(()=> import('./PageEventList'));
            return <AsyncPageEventList onRouteChange={onRouteChange} />
        } else if(route === 'MainPage') {
            const AsyncMainPage = AsyncComponent(()=> import('./MainPage'));
            return <AsyncMainPage onRouteChange={onRouteChange} />
        } else if(route === 'PageEvent') {
            const AsyncPageEvent = AsyncComponent(()=> import('./PageEvent'));
            return <AsyncPageEvent onRouteChange={onRouteChange} />
        } else {
            return <MyRouter/>;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content); 
