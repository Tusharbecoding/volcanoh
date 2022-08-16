import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
// import Switch from 'expo-dark-mode-switch';
import AddDevice from '../screens/AddDevice';
import { Drawer, TouchableRipple, Switch } from 'react-native-paper';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthentication } from '../hook/useAuthentication';

const auth = getAuth();

export function DrawerContent(props) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { user } = useAuthentication();
    const [value, setValue] = React.useState(true);
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={[styles.userCloseDrawer, {flexDirection: 'row'}]}>
                        <View style={{
                            marginTop: windowHeight * 0.07,
                            left: windowWidth * 0.025,
                        }}>
                        <Entypo name="cross" size={35} color="black" onPress={() => props.navigation.closeDrawer()} />
                        </View>
                    </View>
                    <Drawer.Section style={{flex: 1, marginTop: 50}} >
                        <DrawerItem label="Add Device" onPress={() => {props.navigation.navigate('AddDevice')}} />
                        <DrawerItem label="Help" onPress={() => {props.navigation.navigate('Help')}} />
                        <DrawerItem label="Rate Volcanoh" onPress={() => {props.navigation.navigate('RateVolcanoh')}} />
                        <DrawerItem label="Private Policy" onPress={() => {props.navigation.navigate('PrivatePolicy')}} />
                        <DrawerItem label="Log Out" onPress={() => signOut(auth)} />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section >

                <TouchableRipple>
                    <View style={styles.preference}>
                        <Text>Dark Mode</Text>
                        <Switch />
                    </View>
                </TouchableRipple>

            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
})