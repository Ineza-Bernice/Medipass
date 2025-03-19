import React from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    SafeAreaView,
    Dimensions,
    Text,
    ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import InputField from "@/components/authInputs/AuthInput";
import CustomSubmitButton from "@/components/authInputs/SubmitButton";
import DateInputField from "@/components/authInputs/DateInputField";
import { Svg, Path, Rect, Circle, Defs, Pattern, Use, G, ClipPath } from "react-native-svg";

export const Signup = () => {
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
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.headerbg}>
                        <Image source={require('@/assets/images/up-bg.png')} style={styles.headerImage} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <View style={styles.submitwrapper}>
                            <CustomSubmitButton
                                buttonText="Sign In"
                                textColor="#09363B"
                                backgroundColor="#E5E4E2"
                                onPress={handleSignin}
                            />
                            <CustomSubmitButton
                                buttonText="Sign Up"
                                onPress={handlePress}
                            />

                        </View>
                        <View style={styles.submitwrapper}>
                            <InputField
                                label="First Name"
                                inputType="text"
                            />
                            <InputField
                                label="LastName"
                                inputType="text"
                            />
                        </View>
                        <View style={styles.submitwrapper}>
                            <InputField
                                label="Gender"
                                inputType="text"
                            />
                            <DateInputField
                                label="Date Of Birth"
                                inputType="date"
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <InputField
                                label="National Identification Number "
                                inputType="text"
                            />
                        </View>
                        <View style={styles.wrap}>
                            <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <Path d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32386 15.364 2.63604C13.6761 0.948211 11.387 0 9 0ZM9.9 14.4H8.1V12.6H9.9V14.4ZM9.9 10.8H8.1V3.6H9.9V10.8Z" fill="#09363B" fill-opacity="0.51" />
                            </Svg>
                            <Text style={{ fontSize: 12 }}>Use your affiliate’s identification number if you have none.</Text>
                        </View>
                        <ImageBackground
      source={require('@/assets/images/bottom-bg.png')} // Replace with your actual image path
      style={styles.backgroundWrapper}
    >
      <View style={styles.submitwrapper}>
        <InputField label="Insurance Provider" inputType="text" />
        <InputField label="Insurance ID" inputType="text" />
      </View>

      <View style={styles.wrapper}>
        <InputField label="Password" inputType="password" />
      </View>

      <View style={styles.wrapper}>
        <InputField label="Confirm Password" inputType="password" />
      </View>
    <View style={styles.wrapperl}>
    <CustomSubmitButton
                                buttonText="Sign Up"
                                onPress={handlePress}
                            />
    </View>
    </ImageBackground>
    
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    safeArea: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        width: '100%',
    },
    scrollContent: {
        // paddingBottom: 20,
    },
    headerbg: {
        width: '100%',
        height: height * 0.35,
    },
    headerImage: {
        width: '100%',
        height: 202,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28
    },
    inputWrapper: {

    },
    submitwrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        gap: 10,
        marginBottom: 15
    },
    wrapper: {
        paddingHorizontal: 10,
        gap: 10,
        marginBottom: 15
    },
    wrapperl: {
        paddingHorizontal: 10,
        gap: 10,
        paddingTop: 10
    },
    wrap: {
        paddingHorizontal: 10,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10
    },
    backgroundWrapper: {
        flex: 1,
        paddingBottom: 40
      },
});

export default Signup;
