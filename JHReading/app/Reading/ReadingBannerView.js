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
    ScrollView,
    TouchableOpacity
} from 'react-native';

import  Util from './../Util/Util'

export default class ReadingBannerView extends Component {
    render() {
        return (
            <ScrollView
                style={styles.container}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {this.props.bannerData.map((item, key) => {
                    return(
                        <TouchableOpacity key={key} onPress={()=>alert(item.title)}>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({});

module.exports = ReadingBannerView;
