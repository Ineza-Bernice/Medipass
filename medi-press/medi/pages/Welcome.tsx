import React from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Image as RImage,
    ImageBackground,
    Dimensions
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Svg, Path, Rect, Circle, Defs, Image, Pattern, Use, G, ClipPath } from "react-native-svg";
import { Link } from "expo-router";

const { height, width } = Dimensions.get('window');

export const Welcome = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handlePress = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/welcome-bg.png')}
                style={styles.background}
                resizeMode="cover"
            >
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                >
                    <View style={styles.header}>
                        <View style={styles.textWrapper}>
                            <Text style={styles.text}>Welcome !</Text>
                                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 45 }}>
                                    <View>
                                        <Text style={styles.par}>We’re happy to have you !</Text>
                                        <RImage source={require('@/assets/images/bar.png')} />
                                    </View>
                                    <TouchableOpacity style={{ height: 53, width: 53, backgroundColor: '#09363B', borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 30, alignSelf: 'flex-end' }} onPress={handlePress}>
                                        <Svg width="29" height="24" viewBox="0 0 31 26" fill="none">
                                            <Path d="M0.712061 13.2535C0.712061 13.8875 0.963931 14.4956 1.41226 14.9439C1.86059 15.3922 2.46865 15.6441 3.10269 15.6441L22.0364 15.6441L15.7571 21.9235C15.3348 22.3767 15.1049 22.9761 15.1158 23.5954C15.1267 24.2147 15.3776 24.8056 15.8156 25.2436C16.2536 25.6817 16.8446 25.9326 17.4639 25.9435C18.0832 25.9544 18.6826 25.7245 19.1358 25.3022L29.4952 14.9429C29.9429 14.4946 30.1943 13.887 30.1943 13.2535C30.1943 12.62 29.9429 12.0123 29.4952 11.5641L19.1358 1.20473C18.917 0.969854 18.653 0.781465 18.3598 0.650804C18.0665 0.520142 17.75 0.449883 17.429 0.44422C17.108 0.438556 16.7891 0.497603 16.4915 0.617839C16.1938 0.738075 15.9234 0.917035 15.6964 1.14405C15.4694 1.37106 15.2904 1.64146 15.1702 1.93914C15.0499 2.23681 14.9909 2.55566 14.9966 2.87665C15.0022 3.19764 15.0725 3.5142 15.2031 3.80745C15.3338 4.10069 15.5222 4.36462 15.7571 4.58348L22.0364 10.8629L3.10269 10.8629C1.78306 10.8629 0.712061 11.9339 0.712061 13.2535Z" fill="white" />
                                        </Svg>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    background: {
        width: width,
        height: height,
        resizeMode: 'cover',
    },
    scrollView: {
        flex: 1,
        // width: "100%",
    },
    scrollContent: {
        // paddingBottom: 60,
    },
    header: {
        display: "flex",
        paddingTop: 50,
        paddingHorizontal: 30
    },
    textWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%',
        paddingTop: 35,
        gap: 370
    },
    text: {
        fontSize: 32,
        color: '#09363B',
        fontWeight: 'bold'
    },
    par: {
        fontSize: 20,
        fontWeight: 'semibold'
    }
})