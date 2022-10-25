import React, { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, Platform, SafeAreaView, Text } from "react-native";

import Login from "./src/components/Login";
import Inicio from "./src/components/Inicio";
import Menu from "./src/components/Menu";
import Noticia from "./src/components/Noticia";
import Noticias from "./src/components/Noticias";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 5,
          backgroundColor: "#0d1921",
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen
        name="Início"
        component={Inicio}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            <Text  style={{
              color: focused ? "#ffffff" : "#a1b5b5",
              marginBottom: focused ? 10 : 0,
            }}>
              Início
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              size={20}
              style={{ color: focused ? "#ffffff" : "#a1b5b5",  }}
              name="home"
            />
          ),
        }}
      />

  <Tab.Screen
        name="Notícias"
        component={Noticias}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "#ffffff" : "#a1b5b5",
                marginBottom: focused ? 10 : 0,
              }}
            >
              Notícias
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              size={20}
              style={{ color: focused ? "#ffffff" : "#a1b5b5",}}
              name="newspaper"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "#ffffff" : "#a1b5b5",
                marginBottom: focused ? 10 : 0,
              }}
            >
              Menu
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              size={20}
              style={{ color: focused ? "#ffffff" : "#a1b5b5",}}
              name="format-align-justify"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Inicio" component={Tabs} />
          <Stack.Screen name="Noticia" component={Noticia} />          
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  tabnavigator: {
    backgroundColor: "#333f48",
  },
  activate: {
    color: "#ffffff",
  },
  icon: {
    color: "#333f48",
  },
});
