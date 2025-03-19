import React, { useState } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image as RImage,
    ImageBackground,
    Dimensions,
    StatusBar,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    TextInput
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomSubmitButton from "@/components/authInputs/SubmitButton";
import InputField from "@/components/authInputs/AuthInput";
import { Link } from "expo-router";

const { height, width } = Dimensions.get('window');

export const Login = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handlePress = () => {
        navigation.navigate('Signup');
    };

    const handleSignin = () => {
      navigation.navigate('Login');
  };

  const handleWelcome = () => {
    navigation.navigate('Welcome');
};

    return (
        <View style={styles.container}>
            {/* Transparent Status Bar */}
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

            <ImageBackground
                source={require('../../assets/images/onboarding.png')}
                style={styles.background}
                resizeMode="cover"
            >
                <SafeAreaView style={styles.safeArea}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.keyboardAvoidingView}
                    >
                        <ScrollView
                            style={styles.scrollView}
                            contentContainerStyle={styles.scrollContent}
                        >
                            <View style={styles.inputWrapper}>
                                <View style={styles.submitwrapper}>
                                    <CustomSubmitButton
                                        buttonText="Sign In"
                                        onPress={handleSignin}
                                    />
                                    <CustomSubmitButton
                                        buttonText="Sign Up"
                                        textColor="#09363B"
                                        backgroundColor="#E5E4E2"
                                        onPress={handlePress}
                                    />
                                </View>
                                <View style={styles.wrapper}>
                                    <InputField 
                                        label="Username"
                                        inputType="text"
                                    />
                                    <InputField 
                                        label="Password"
                                        inputType="password"
                                    />
                                    <View style={styles.wrap}>
                                        <Link href="/" style={styles.link}>Forgot Password ?</Link>
                                    </View>
                                    <CustomSubmitButton
                                        buttonText="Sign In"
                                        onPress={handleWelcome}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: width,
        height: height,
    },
    safeArea: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        width: '100%',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        // paddingBottom: 60,
    },
    header: {
        display: "flex",
        paddingTop: 50,
    },
    logoName: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
    },
    logoWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingTop: 25,
    },
    inputWrapper: {
        paddingTop: 305,
        gap: 15,
    },
    submitwrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        gap: 10,
    },
    link: {
        color: '#09363B',
        fontSize: 15,
        fontWeight: 'bold',
    },
    wrapper: {
        paddingHorizontal: 25,
        gap: 10,
    },
    wrap: {
        alignItems: 'flex-end',
    },
    keyboardAvoidingView: {
        flex: 1,
    }
});
