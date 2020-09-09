import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import classes from './Layout.module.css'

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };

    sideDrawerToggleHandler = () => {
        this.setState((prev) => {
            return {
                showSideDrawer: !prev.showSideDrawer
            }
        })
    };


    render() {
        return (
            <Fragment>
                <Toolbar drawerToggleClick={this.sideDrawerToggleHandler}/>
                <SideDrawer show ={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

Layout.propTypes = {};

export default Layout;


