import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  Keyboard,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaskInput from "react-native-mask-input";
import styles from "./styles";
const cpfmask = [
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

export default function Login() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState(null);
  const [password, setPassword] = useState(null);

  async function dologin() {
    //console.log('login');
    navigation.navigate("Inicio");
  }

  async function esquecisenha() {
    console.log("esquecisenha");
  }

  async function cadastrese() {
    console.log("cadastrese");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Pressable style={styles.containerForm} onPress={Keyboard.dismiss}>
        <View style={styles.divtitle}>
          <Text style={styles.subtitle}>Olá,</Text>
          <Text style={styles.subtitle}>Seja bem vindo ao</Text>
          <Text style={styles.title}>Meu Time!</Text>
        </View>
        <View style={styles.divform}>
          <Text style={styles.label}>Usuário</Text>
          <MaskInput
            style={styles.input}
            mask={cpfmask}
            value={usuario}
            keyboardType="number-pad"
            onChangeText={(masked, unmasked, obfuscated) => {
              setUsuario(unmasked); // you can use the masked value as well
            }}
          />
          <Text style={styles.label2}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity style={styles.button} onPress={() => dologin()}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>

          <Pressable onPress={() => esquecisenha()}>
            <Text style={styles.labelesquecisenha}>Esqueci minha senha</Text>
          </Pressable>

          <Pressable onPress={() => cadastrese()}>
            <Text style={styles.labelcadastrese}>Cadastre-se</Text>
          </Pressable>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
