import React from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Image as RImage
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Svg, Path, Rect, Circle, Defs, Image, Pattern, Use, G, ClipPath } from "react-native-svg";
import { Link } from "expo-router";

export const Notifications = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handlePress = () => {
        navigation.navigate('Notifications')
    }

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                         <TouchableOpacity  onPress={() => navigation.goBack()} >
                                                <Svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                                                    <Path d="M1.72275 7.59637L8.42071 13.8848C8.48616 13.9458 8.53788 14.0186 8.5728 14.0987C8.60772 14.1788 8.62514 14.2647 8.62402 14.3513C8.6229 14.4378 8.60327 14.5233 8.56629 14.6026C8.5293 14.6819 8.47572 14.7534 8.40871 14.813C8.27164 14.935 8.08924 15.0021 7.90027 15C7.7113 14.9979 7.53065 14.9267 7.39671 14.8017L0.203755 8.04829C0.138685 7.98769 0.0871502 7.91554 0.0521675 7.83605C0.0171849 7.75656 -0.000545631 7.67133 1.30199e-05 7.58534C0.000571671 7.49936 0.0194086 7.41434 0.0554215 7.33525C0.0914344 7.25617 0.143901 7.18461 0.209754 7.12476L7.78071 0.19129C7.91624 0.0685815 8.0973 -3.94584e-08 8.28571 -3.12228e-08C8.47412 -2.29871e-08 8.65517 0.0685815 8.7907 0.191291C8.85693 0.251589 8.90957 0.323734 8.94553 0.403453C8.98148 0.483172 9 0.568845 9 0.655397C9 0.74195 8.98148 0.827622 8.94553 0.907341C8.90957 0.98706 8.85693 1.05921 8.7907 1.1195L1.72275 7.59637Z" fill="black" />
                                                </Svg>
                                                </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: '#09363B' }}>Notifications</Text>
                        <Text></Text>
                    </View>
                   <View style={{ marginTop: 50 }}>
                   <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                        <Svg width="61" height="61" viewBox="0 0 61 61" fill="none" style={{ width: 'auto' }}>
                            <Circle cx="30.5" cy="30.5" r="30" fill="#E2E0E0" stroke="#09363B" />
                        </Svg>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            <Text style={{ fontSize: 12, color: '#6C6C6C' }}>1m ago</Text>
                        </View>
                        <View style={{ backgroundColor: '#09363B', width: 19, height: 19, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ color: 'white', fontSize: 13 }}>2</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                        <Svg width="61" height="61" viewBox="0 0 61 61" fill="none" style={{ width: 'auto' }}>
                            <Circle cx="30.5" cy="30.5" r="30" fill="#E2E0E0" stroke="#09363B" />
                        </Svg>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            <Text style={{ fontSize: 12, color: '#6C6C6C' }}>1m ago</Text>
                        </View>
                        <View style={{ backgroundColor: '#09363B', width: 19, height: 19, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ color: 'white', fontSize: 13 }}>2</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                        <Svg width="61" height="61" viewBox="0 0 61 61" fill="none" style={{ width: 'auto' }}>
                            <Circle cx="30.5" cy="30.5" r="30" fill="#E2E0E0" stroke="#09363B" />
                        </Svg>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            <Text style={{ fontSize: 12, color: '#6C6C6C' }}>1m ago</Text>
                        </View>
                        <View style={{ backgroundColor: '#09363B', width: 19, height: 19, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ color: 'white', fontSize: 13 }}>2</Text>
                        </View>
                    </View>
                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                        <Svg width="61" height="61" viewBox="0 0 61 61" fill="none" style={{ width: 'auto' }}>
                            <Circle cx="30.5" cy="30.5" r="30" fill="#E2E0E0" stroke="#09363B" />
                        </Svg>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            <Text style={{ fontSize: 12, color: '#6C6C6C' }}>1m ago</Text>
                        </View>
                        <View style={{ backgroundColor: '#09363B', width: 19, height: 19, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ color: 'white', fontSize: 13 }}>2</Text>
                        </View>
                    </View>
                    
                   </View>


                </View>
            </ScrollView>
        </View>
    );
};

export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
        // width: "100%",
    },
    scrollContent: {
        paddingBottom: 60,
    },
    header: {
        display: "flex",
        paddingTop: 35,
        paddingHorizontal: 30
    },
    iconButton: {
        width: 30,
        height: 30,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    containe: {
        position: 'relative',
        backgroundColor: '#DFF0EB',
        padding: 15,
        borderRadius: 10,
        width: 50,
        height: 50
    },
    badge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'red',
        width: 15,
        height: 15,
        borderRadius: 7.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 2
    },

})