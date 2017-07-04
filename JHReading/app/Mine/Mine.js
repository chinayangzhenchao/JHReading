/**
 * Created by xmg on 2017/7/2.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import MineCommonListView from './MineCommonListView'
export default class Mine extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    render() {
        return (
            <MineCommonListView/>
        );
    }
}

const styles = StyleSheet.create({});

module.exports = Mine;
