// import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
// import { Animated, Dimensions, Easing, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Constants, { FONTS } from '../utils/Constant';

// import Reports from '../screens/app/Report'
// import Settings from '../screens/app/Settings'
// import { Calculator, HomeIcon, Lightbulb } from 'lucide-react-native';
// import HomeScreen from '../screens/app/Home';
// import LoanAdviser from '../screens/app/LoanAdviser';





// const Tab = createBottomTabNavigator();

// export const TabNav = () => {
//   const tabOffsetValue = useRef(new Animated.Value(0)).current;
//   function getWidth() {
//     let width = Dimensions.get("window").width
//     // Total five Tabs...
//     return width / 3
//   }

//   const TabArr = [
//     {
//       iconActive: <HomeIcon color={Constants.primary} height={24} width={24} />,
//       iconInActive: <HomeIcon color={Constants.black} height={24} width={24} />,
//       component: HomeScreen,
//       routeName: 'Home',
//     },
//     {
//       iconActive: <Lightbulb color={Constants.primary} height={24} width={24} />,
//       iconInActive: <Lightbulb color={Constants.black} height={24} width={24} />,
//       component: Reports,
//       routeName: 'Reports',
//     },
//     {
//       iconActive: <Calculator color={Constants.primary} height={24} width={24} />,
//       iconInActive: <Calculator color={Constants.black} height={24} width={24} />,
//       component: Settings,
//       routeName: 'Settings',
//     },
//     {
//       iconActive: <Lightbulb color={Constants.primary} height={24} width={24} />,
//       iconInActive: <Lightbulb color={Constants.black} height={24} width={24} />,
//       component: LoanAdviser,
//       routeName: 'LoanAdviser',
//     },
//   ];

//   const TabButton = useCallback(
//     (props) => {
//       const isSelected = props?.['aria-selected'];
//       const onPress = props?.onPress;
//       const onclick = props?.onclick;
//       const item = props?.item;
//       const index = props?.index;
//       useEffect(() => {

//         {
//           isSelected &&
//             Animated.spring(tabOffsetValue, {
//               toValue: getWidth() * index,
//               useNativeDriver: true
//             }).start();
//         }

//       }, [isSelected])

//       const scaleAnim = useRef(new Animated.Value(1)).current;
//       useEffect(() => {
//         Animated.spring(scaleAnim, {
//           toValue: isSelected ? 1.3 : 1, // scale up when selected, back when unselected
//           useNativeDriver: true,
//         }).start();
//       }, [isSelected]);

//       return (
//         <View style={styles.tabBtnView}>
//           {/* {index === 0 && <Animated.View style={{
//             // width: getWidth() -15,
//             height: 40,
//             width: 40,
//             backgroundColor: 'trans',
//             // position: 'absolute',
//             top: -12,
//             borderRadius: 30,
//             transform: [
//               { translateX: tabOffsetValue }
//             ]
//           }}>
//           </Animated.View>} */}

//           <TouchableOpacity
//             onPress={onclick ? onclick : onPress}
//             style={[
//               styles.tabBtn,
//               // {backgroundColor:isSelected?Constants.custom_green:null}
//             ]}>
//             <Animated.View style={{
//               transform: [{ scale: scaleAnim }],
//               // height: 48,
//               // width: 48,
//               // marginTop: 15
//             }}>
//               {isSelected ? item.iconActive : item.iconInActive}
//             </Animated.View>

//           </TouchableOpacity>
//           {isSelected && <Text style={{ color: Constants.primary, }}>{item.routeName}</Text>}
//           {/* <Text style={[styles.tabtxt,{color:isSelected?Constants.custom_green:Constants.tabgrey}]} onPress={onclick ? onclick : onPress}>{item.name}</Text> */}
//         </View>
//       );
//     },
//     [],
//   );

//   return (

//     <Tab.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//         tabBarStyle: {
//           position: 'absolute',
//           width: '100%',
//           // height: 80,
//           backgroundColor: Constants.white,

//           borderWidth: 1,
//           borderBottomWidth: 0,
//           borderColor: Constants.custom_blue
//         },
//       }}>
//       {TabArr.map((item, index) => {
//         return (
//           <Tab.Screen
//             key={index}
//             name={item.routeName}
//             component={item.component}

//             options={{
//               tabBarShowLabel: false,
//               tabBarButton: props => (
//                 <TabButton {...props} item={item} index={index} />
//               ),
//             }}
//           />
//         );
//       })}
//     </Tab.Navigator>

//   );

// }

// const styles = StyleSheet.create({
//   tabBtnView: {
//     // backgroundColor: isSelected ? 'blue' : '#FFFF',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     marginTop: 20
//   },
//   tabBtn: {
//     height: 40,
//     width: 40,
//     // padding:10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 25,
//   },
//   tabBtnActive: {
//     backgroundColor: Constants.white,
//   },
//   tabBtnInActive: {
//     backgroundColor: 'white',
//   },
//   tabtxt: {
//     color: Constants.white,
//     fontSize: 12,
//     fontWeight: '400',
//     // alignSelf:'center'
//   },
// });

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Dimensions } from "react-native";
import {
  Home,
  Lightbulb,
  Calculator,
  FileText,
  User,
} from "lucide-react-native";

import HomeScreen from "../screens/app/Home";
import TipsScreen from "../screens/app/TipsScreen";
import EmiScreen from "../screens/app/EmiScreen";
import LoanAdviser from "../screens/app/LoanAdviser";

const Tab = createBottomTabNavigator();



const TabIcon = ({ focused, Icon, label }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: 'flex-start', width: Dimensions.get("window").width / 4, height: 30 }}>
      <View
        style={{
          backgroundColor: focused ? "#E8F5E9" : "transparent",
          padding: 8,
          borderRadius: 12,
        }}
      >
        <Icon
          size={22}
          strokeWidth={2}
          color={focused ? "#2E7D32" : "#9E9E9E"}
        />
      </View>

      {focused && (
        <Text
          style={{
            fontSize: 11,
            marginTop: 4,
            color: "#2E7D32",
            fontWeight: "600",
          }}
        >
          {label}
        </Text>
      )}
    </View>
  );
};

function BottomTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#2E7D32",
        tabBarInactiveTintColor: "#9E9E9E",
        tabBarShowLabel: false, // IMPORTANT

        tabBarLabelStyle: {
          fontSize: 11,
          marginBottom: 4,
        },
        tabBarStyle: {
          height: 80,
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 0,
          backgroundColor: "#fff",

          // iOS shadow
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.08,
          shadowRadius: 10,

          // Android
          elevation: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={Home} label='Home' />
          ),
        }}
      />

      <Tab.Screen
        name="Tips"
        component={TipsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={Lightbulb} label='Tips' />
          ),
        }}
      />

      <Tab.Screen
        name="EMI"
        component={EmiScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={Calculator} label='Calc' />
          ),
        }}
      />

      <Tab.Screen
        name="Resources"
        component={LoanAdviser}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={FileText} label='Adviser' />
          ),
        }}
      />


    </Tab.Navigator>
  );
}

export default BottomTabBar;

