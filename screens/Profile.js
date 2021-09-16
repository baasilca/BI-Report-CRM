import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/Foundation';
import { Badge } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const Profile = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [pickedImage, setpickedImage] = useState(null)

    const ImagePickergallery = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            ToastAndroid.show('permission to access camera roll is required', ToastAndroid.LONG);
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }
        setpickedImage(pickerResult.uri);
        setModalVisible(!modalVisible);
    };


    const ImagePickerCamera = async () => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {

            ToastAndroid.show('permission to access camera roll is required', ToastAndroid.LONG);
            return;
        }
        let pickerResult = await ImagePicker.launchCameraAsync()

        if (pickerResult.cancelled === true) {
            return;
        }

        setpickedImage(pickerResult.uri)
        setModalVisible(!modalVisible);

    }
    return (
        <View style={{
            height: '100%', width: '100%',
            flex: 1,
        }}>
            <View style={styles.container}>
                <View>
                    <Image style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        height: 200,
                        width: 200,
                        borderRadius: 100
                    }} source={{ uri: pickedImage }}>

                    </Image>
                    <TouchableOpacity onPress={() => { setModalVisible(true) }}>
                        <Badge>change image</Badge>
                    </TouchableOpacity></View>
                <Text style={{ fontSize: 20, marginTop: 20 }}>user name </Text>
                <Text style={{ fontSize: 15, marginTop: 20 }}>user@sample.com </Text>
                <View>

                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}>
                    <View style={{
                        height: 200,
                        marginTop: 250,
                        borderRadius: 20,
                        backgroundColor: '#336655',
                        width: '80%',
                        alignSelf: 'center',
                        backgroundColor: 'white'
                    }}>
                        <View style={{ width: '80%', borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'row' }}>

                            <Text style={{ fontSize: 20, marginTop: 10, color: '#009387', justifyContent: 'center', marginLeft: 10, marginBottom: 10 }}> Choose from</Text>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Icon name="close" color={'#009387'} size={30} style={{ marginTop: 10, marginLeft: 150 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={ImagePickergallery}>
                                <IconA name="photo" color={'#009387'} size={50} style={{ marginTop: 30, }} />

                                <Text style={{ marginLeft: 5, }}>gallery</Text></TouchableOpacity >
                            <TouchableOpacity onPress={ImagePickergallery} >
                                <Icon name="google-photos" color={'#009387'} size={50} style={{ marginLeft: 20, marginTop: 30, }} />

                                <Text style={{ marginLeft: 30, }}>photos</Text></TouchableOpacity>
                            <TouchableOpacity onPress={ImagePickerCamera} >
                                <Icon name="camera" color={'#009387'} size={50} style={{ marginLeft: 20, marginTop: 30, }} />
                                <Text style={{ marginLeft: 25, }}>camera</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        height: '100%', width: '100%',
        flex: 1, justifyContent: "center", alignItems: "center"
    },


    modal: {
        height: '100%',
        justifyContent: 'center',
        width: "100%"
    },


})



