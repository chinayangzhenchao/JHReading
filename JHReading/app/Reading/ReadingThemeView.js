/**
 * Created by me860209 on 2017/7/4.
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
    Image
} from 'react-native';

import MyButton from './../util/MyButton';
import ReadingThemeListView from './ReadingThemeListView'

const tempArr = ['react', 'node', 'other'];
export default class ReadingThemeView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {tempArr.map((item, key) => {
                    return (
                        <MyButton
                            key={key}
                            title=''
                            btnViewStyle={styles.btnViewstyle}
                            renderImg={() => <Image source={require('./../../images/theam_' + key + '.jpg')}
                                                    style={styles.imageStyle}/>}
                            clickBtn={() => this._clickBtn(item)}
                        >
                        </MyButton>
                    )
                })}
            </View>
        );
    }

    _clickBtn(title) {
        const listDataArr = this.props.themeData[title];
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                component: ReadingThemeListView,
                passProps: {listDataArr, title}
            })
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#fff',
        justifyContent:'space-around',
        paddingBottom:10
    },
    btnViewStyle:{
        width:108,
        height:62,
        borderWidth:0,
        backgroundColor:'transparent'
    },
    imageStyle: {
        width:108,
        height:62,
        // position:'absolute',
        // left:0,
        // top:0
    }
});

module.exports = ReadingThemeView;
