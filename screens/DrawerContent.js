import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import AddDevice from '../screens/AddDevice';
import { Drawer } from 'react-native-paper';

export function DrawerContent(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={[styles.userCloseDrawer, {flexDirection: 'row'}]}>
                        <View style={{
                            marginTop: 15,
                        }}>
                        <Entypo name="cross" size={30} color="black"  />
                        </View>
                    </View>
                    <Drawer.Section style={{flex: 1, marginTop: 15}}>
                        <DrawerItem label="Add Device" onPress={() => {props.navigation.navigate('AddDevice')}} />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    
})