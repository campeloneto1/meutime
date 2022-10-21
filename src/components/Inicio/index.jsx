import React, {useState} from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Pressable, Keyboard } from 'react-native';
import styles from "./styles";

export default function Inicio() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.divtitle}>
                <Text style={styles.subtitle}>Olá</Text>
                <Text style={styles.title}>Campelo Neto</Text>
            </View>
        </SafeAreaView>
    )
}
