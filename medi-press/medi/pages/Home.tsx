import React, { useState } from "react";
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
import { Svg, Path, Rect, Circle, Defs, Image, Pattern, Use, G, ClipPath, Ellipse, Line, Filter, FeFlood, FeBlend, FeGaussianBlur } from "react-native-svg";
import { Link } from "expo-router";

export const Home = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [showSignOut, setShowSignOut] = useState(false);

    const handlePress = () => {
        navigation.navigate('NoNotifications')
    }

    const toggleSignOut = () => {
        setShowSignOut(prevState => !prevState);
    };

    const handleSignOut = () => {
        navigation.navigate('Onboarding')
    }

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >

                <View style={styles.header}>
                    <View style={{}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hello, Jeanne</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, alignItems: 'center' }}>
                                <TouchableOpacity onPress={handlePress}>
                                    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <Path d="M8.00004 25.3333V13.3333C8.00004 11.2116 8.8429 9.17678 10.3432 7.67649C11.8435 6.1762 13.8783 5.33334 16 5.33334C18.1218 5.33334 20.1566 6.1762 21.6569 7.67649C23.1572 9.17678 24 11.2116 24 13.3333V25.3333M8.00004 25.3333H24M8.00004 25.3333H5.33337M24 25.3333H26.6667M14.6667 29.3333H17.3334" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M16.0001 5.33334C16.7365 5.33334 17.3334 4.73638 17.3334 4.00001C17.3334 3.26363 16.7365 2.66667 16.0001 2.66667C15.2637 2.66667 14.6667 3.26363 14.6667 4.00001C14.6667 4.73638 15.2637 5.33334 16.0001 5.33334Z" stroke="black" stroke-width="2.5" />
                                        <Circle cx="23.5" cy="7.5" r="4.5" fill="black" />
                                    </Svg>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleSignOut}>
                                    <RImage source={require("@/assets/images/profile.png")} alt="Profile picture" />
                                </TouchableOpacity>
                                {showSignOut && (
                                    <View style={styles.signOutContainer}>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2, marginBottom: 2 }}>
                                            <RImage source={require("@/assets/images/profile.png")} alt="Profile picture" style={{ width: 27, height: 27 }} />
                                            <Text style={styles.signOutText}>Jeanne IRAKOZE</Text>
                                        </View>
                                        <Svg width={146} height={3} viewBox="0 0 146 3" fill="none">
                                            <Defs>
                                                <Filter id="blurFilter" x="0" y="0" width="146" height="3" filterUnits="userSpaceOnUse" >
                                                    <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <FeGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur" />
                                                </Filter>
                                            </Defs>
                                            <Line x1="1" y1="1.5" x2="145" y2="1.5" stroke="white" filter="url(#blurFilter)" />
                                        </Svg>
                                       
                                        <View style={{  }}>
                                        <TouchableOpacity onPress={handleSignOut} style={{ flexDirection: 'row',  alignItems: 'center', gap: 2, alignSelf: 'flex-start', paddingLeft: 4, paddingVertical: 5 }}>
                                            <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
                                                <G clipPath="url(#clip0)">
                                                    <Path
                                                        d="M12.25 6V4.5C12.25 4.10218 12.092 3.72064 11.8107 3.43934C11.5294 3.15804 11.1478 3 10.75 3H5.5C5.10218 3 4.72064 3.15804 4.43934 3.43934C4.15804 3.72064 4 4.10218 4 4.5V13.5C4 13.8978 4.15804 14.2794 4.43934 14.5607C4.72064 14.842 5.10218 15 5.5 15H10.75C11.1478 15 11.5294 14.842 11.8107 14.5607C12.092 14.2794 12.25 13.8978 12.25 13.5V12"
                                                        stroke="white"
                                                        strokeWidth={1.5}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <Path
                                                        d="M8.5 9H17.5M17.5 9L15.25 6.75M17.5 9L15.25 11.25"
                                                        stroke="white"
                                                        strokeWidth={1.5}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </G>
                                                <Defs>
                                                    <ClipPath id="clip0">
                                                        <Rect width={18} height={18} fill="white" />
                                                    </ClipPath>
                                                </Defs>
                                            </Svg>
                                            <Text style={styles.signOutText}> Sign Out</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30, marginTop: 10 }}>
                        <Svg width={47} height={47} viewBox="0 0 47 47" fill="none">
                            <G clipPath="url(#clip0_116_348)">
                                <Path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M26.5416 5.13978C26.5416 4.6946 26.7184 4.26765 27.0332 3.95285C27.348 3.63806 27.775 3.46121 28.2201 3.46121H33.6755C34.1207 3.46121 34.5476 3.63806 34.8624 3.95285C35.1772 4.26765 35.3541 4.6946 35.3541 5.13978V9.86328H40.0742C40.5194 9.86328 40.9463 10.0401 41.2611 10.3549C41.5759 10.6697 41.7528 11.0967 41.7528 11.5419V16.9972C41.7528 17.4424 41.5759 17.8693 41.2611 18.1841C40.9463 18.4989 40.5194 18.6758 40.0742 18.6758H35.3541V23.3959C35.3541 23.8411 35.1772 24.2681 34.8624 24.5829C34.5476 24.8976 34.1207 25.0745 33.6755 25.0745H28.2201C27.775 25.0745 27.348 24.8976 27.0332 24.5829C26.7184 24.2681 26.5416 23.8411 26.5416 23.3959V18.6758H21.8214C21.3762 18.6758 20.9493 18.4989 20.6345 18.1841C20.3197 17.8693 20.1429 17.4424 20.1429 16.9972V11.5419C20.1429 11.0967 20.3197 10.6697 20.6345 10.3549C20.9493 10.0401 21.3762 9.86328 21.8214 9.86328H26.5416V5.13978ZM6.18721 23.5H0V36.9286L6.13686 43.0654C7.38392 44.3129 8.86454 45.3024 10.4941 45.9775C12.1237 46.6526 13.8703 47.0001 15.6342 47H35.25C36.5855 47 37.8664 46.4695 38.8108 45.5251C39.7552 44.5807 40.2857 43.2998 40.2857 41.9643C40.2857 40.6287 39.7552 39.3479 38.8108 38.4035C37.8664 37.4591 36.5855 36.9286 35.25 36.9286H25.9272C25.5782 38.1055 24.9293 39.1715 24.0442 40.022C23.1591 40.8726 22.0682 41.4786 20.8783 41.7805C19.6885 42.0825 18.4406 42.07 17.257 41.7444C16.0735 41.4188 14.9948 40.7912 14.1269 39.9231L9.259 35.0553C9.06413 34.8604 8.90956 34.6291 8.8041 34.3745C8.69864 34.1199 8.64436 33.847 8.64436 33.5714C8.64436 33.2959 8.69864 33.023 8.8041 32.7684C8.90956 32.5138 9.06413 32.2824 9.259 32.0876C9.45386 31.8927 9.6852 31.7381 9.9398 31.6327C10.1944 31.5272 10.4673 31.4729 10.7429 31.4729C11.0184 31.4729 11.2913 31.5272 11.5459 31.6327C11.8005 31.7381 12.0318 31.8927 12.2267 32.0876L17.0946 36.9554C17.6073 37.4671 18.2937 37.7673 19.0174 37.7965C19.7412 37.8257 20.4495 37.5818 21.0018 37.1131C21.5541 36.6445 21.9101 35.9853 21.9991 35.2665C22.0881 34.5476 21.9037 33.8216 21.4824 33.2324L15.6846 27.4346C14.4375 26.1871 12.9569 25.1976 11.3273 24.5225C9.69772 23.8474 7.9511 23.4999 6.18721 23.5Z"
                                    fill="black"
                                />
                            </G>
                            <Defs>
                                <ClipPath id="clip0_116_348">
                                    <Rect width={47} height={47} fill="white" />
                                </ClipPath>
                            </Defs>
                        </Svg>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 13, marginBottom: 8, fontWeight: 'bold', marginTop: 6 }}>Plan Type</Text>
                            <Text style={{ fontSize: 16 }}>Medical / Rx</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <View style={{ backgroundColor: '#09363B', width: 211, height: 50, borderRadius: 14, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 24, color: '#fff' }}>Jeanne IRAKOZE</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                            <View style={{ gap: 5, }}>
                                <Text style={styles.heading}>Date Of Birth</Text>
                                <Text style={styles.theText}>01 / 01 / 2000</Text>
                            </View>
                            <View style={{ gap: 5, alignItems: 'flex-end' }}>
                                <Text style={styles.heading}>Gender</Text>
                                <Text style={styles.theText}>Female ( F )</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                            <View style={{ gap: 5, }}>
                                <Text style={styles.heading}>National Identification Number </Text>
                                <Text style={styles.theText}>122909010</Text>
                            </View>
                            <View style={{ gap: 5, alignItems: 'flex-end' }}>
                                <Text style={styles.heading}>Valid Until</Text>
                                <Text style={styles.theText}>01 / 01 / 2030</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                            <View style={{ gap: 5, }}>
                                <Text style={styles.heading}>Insurance Provider</Text>
                                <Text style={styles.theText}>Old Mutual Insurance</Text>
                            </View>
                            <View style={{ gap: 5, alignItems: 'flex-end' }}>
                                <Text style={styles.heading}>Insurance ID</Text>
                                <Text style={styles.theText}>122909010</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Scan this QR Code to obtain the patient’s</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>medical records.</Text>
                        </View>
                        <View style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <RImage source={require("@/assets/images/qr_code.png")} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;

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
        paddingTop: 50,
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
    text: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    heading: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    theText: {
        fontSize: 16
    },
    signOutContainer: {
        position: 'absolute',
        top: 50, // Adjust based on your layout
        // left: 0,
        right: 0,
        backgroundColor: '#09363B',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 16,
        width: 155,
        height: 99,
    },
    signOutText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
