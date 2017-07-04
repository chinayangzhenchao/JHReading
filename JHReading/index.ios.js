/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import LaunchPageView from './app/LaunchPageView'
export default class JHReading extends Component {
    render() {
        return (
            <LaunchPageView/>
        );
    }
}

AppRegistry.registerComponent('JHReading', () => JHReading);
