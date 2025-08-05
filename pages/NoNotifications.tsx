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

export const NoNotifications = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handlePress = () => {
        navigation.navigate('Notifications')
    }

    return (
        <View style={styles.container}>
            <ImageBackground
              source={require('../assets/images/notif_bg.jpg')}
              style={styles.background}
              resizeMode="cover"
            >
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                       
                        <TouchableOpacity  onPress={() => navigation.goBack()} >
                        <Svg width="13" height="19" viewBox="0 0 9 15" fill="none">
                            <Path d="M1.72275 7.59637L8.42071 13.8848C8.48616 13.9458 8.53788 14.0186 8.5728 14.0987C8.60772 14.1788 8.62514 14.2647 8.62402 14.3513C8.6229 14.4378 8.60327 14.5233 8.56629 14.6026C8.5293 14.6819 8.47572 14.7534 8.40871 14.813C8.27164 14.935 8.08924 15.0021 7.90027 15C7.7113 14.9979 7.53065 14.9267 7.39671 14.8017L0.203755 8.04829C0.138685 7.98769 0.0871502 7.91554 0.0521675 7.83605C0.0171849 7.75656 -0.000545631 7.67133 1.30199e-05 7.58534C0.000571671 7.49936 0.0194086 7.41434 0.0554215 7.33525C0.0914344 7.25617 0.143901 7.18461 0.209754 7.12476L7.78071 0.19129C7.91624 0.0685815 8.0973 -3.94584e-08 8.28571 -3.12228e-08C8.47412 -2.29871e-08 8.65517 0.0685815 8.7907 0.191291C8.85693 0.251589 8.90957 0.323734 8.94553 0.403453C8.98148 0.483172 9 0.568845 9 0.655397C9 0.74195 8.98148 0.827622 8.94553 0.907341C8.90957 0.98706 8.85693 1.05921 8.7907 1.1195L1.72275 7.59637Z" fill="black" />
                        </Svg>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: '#09363B' }}>Notifications</Text>
                        <Text></Text>
                    </View>
                    <View style={{ display: 'flex' , justifyContent: 'center', alignItems: 'center', marginTop: 180}}>
                       
                       <View style={{ marginBottom: 10 }}>
                       <Svg width="138" height="139" viewBox="0 0 138 139" fill="none" >
                            <Path d="M65.5846 0.0597076C65.5546 0.104736 64.7892 0.164764 63.9037 0.224792C54.8688 0.78009 44.6483 3.75169 36.4088 8.22411C20.3652 16.9288 8.67388 31.0664 3.1509 48.4608C0.224323 57.6908 -0.676163 68.2115 0.614533 78.0568C3.40604 99.0681 15.4125 117.363 33.6173 128.289C41.1964 132.836 49.5259 135.868 58.2456 137.264C64.3989 138.239 72.5333 138.299 78.7317 137.414C109.138 133.091 133.166 109.049 137.398 78.7321C137.909 75.1002 138.014 73.3743 137.999 68.9018C137.999 63.1838 137.699 60.2272 136.648 55.0944C133.466 39.546 125.167 25.8736 112.575 15.458C109.678 13.0567 105.701 10.4153 101.829 8.29915C94.5652 4.32201 85.6804 1.50047 77.531 0.554962C76.4655 0.419891 75.2798 0.284821 74.9046 0.239792C74.0792 0.14975 65.6896 -0.0153351 65.5846 0.0597076ZM70.102 35.5689C70.7324 35.899 71.4678 36.9346 71.903 38.0902C72.2332 38.9757 72.6534 41.377 72.6534 42.4276V43.0579L73.824 43.163C79.4971 43.6882 84.2246 47.035 87.0462 52.528C88.7271 55.7998 89.2524 57.8709 89.6876 62.8236C91.0383 78.432 93.1995 87.3018 96.5163 90.6786C97.9571 92.1494 99.0226 92.6296 101.544 92.8998C102.73 93.0349 102.94 93.1099 103.255 93.4701C103.54 93.8003 103.585 93.9804 103.525 94.4756C103.465 94.8508 103.315 95.196 103.12 95.3461C102.805 95.6012 101.034 95.6163 69.1265 95.6163C50.6065 95.6163 35.3433 95.5712 35.2082 95.5262C34.908 95.4061 34.5328 94.6858 34.5328 94.2205C34.5328 93.5301 35.0431 93.0949 36.0036 92.9898C39.4705 92.6296 40.9113 91.9243 42.4571 89.8531C45.2636 86.0711 47.0046 78.387 48.4153 63.4989C48.7905 59.4167 49.1357 57.5857 49.9161 55.3946C50.4864 53.8187 51.6571 51.5225 52.5726 50.1717C53.5631 48.731 55.6192 46.6448 56.8799 45.7894C58.981 44.3786 61.7575 43.4031 64.2639 43.163L65.4195 43.0729L65.5246 41.7672C65.8998 37.1447 67.9258 34.3982 70.102 35.5689ZM75.8801 97.1171C75.9252 97.1921 76.0152 97.7324 76.0602 98.3027C76.4054 102.475 73.2087 105.972 69.0515 105.972C64.8942 105.972 61.6975 102.475 62.0427 98.3027C62.0877 97.7324 62.1777 97.1921 62.2228 97.1171C62.3428 96.907 75.7601 96.907 75.8801 97.1171Z" fill="#09363B" />
                        </Svg>
                        <View style={{ backgroundColor: '#09363B', height: 22 , width: 22, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderColor: '#fff', borderWidth: 2, position: 'absolute', top: 38, left: 74 }}>
                            <Text style={{ color: '#fff' }}>0</Text>
                        </View>
                       </View>
                        <Text style={{ fontSize: 20, color: '#09363B', fontWeight: 'bold' }}>No New Notifications</Text>
                        <Text style={{ color: '#09363B', fontSize: 14 }}>All notifications will be visible here</Text>
                    </View>
                </View>
            </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default NoNotifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    background: {
        width: width,
        height: height,
        resizeMode: 'cover',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // position: 'relative',
        // right: 20,
        // top: -40,
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