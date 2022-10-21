import React, {useState} from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Pressable, Keyboard } from 'react-native';
import styles from "./styles";

export default function Menu() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.divtitle}>
                <Text style={styles.title}>Menu</Text>
            </View>
        </SafeAreaView>
    )
}
