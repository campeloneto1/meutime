import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Pressable,
  Keyboard,
  ScrollView,
  RefreshControl,
  FlatList,
} from "react-native";
import styles from "./styles";

import axios from "axios";

export default function Inicio() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [noticias, setNoticias] = React.useState([]);

  useFocusEffect(
    React.useCallback(() => {
      //getNoticias();
      axios({
        method: "get",
        url: 'https://www.gazetaesportiva.com/times/flamengo/feed/',
      })
        .then((rss) => {
          console.log(rss.responseText);
        })
        .catch((error) => {});
    }, [])
  );

  const onRefresh = React.useCallback(() => {
    getNoticias();
  }, []);

  async function getNoticias() {}

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      data: "21/10/2022 15:00",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices cursus mi quis consectetur. Nullam ac turpis quis magna sollicitudin pretium id eget lorem. Vivamus auctor feugiat dolor, non sagittis erat vulputate at. Aliquam vitae facilisis est. Maecenas faucibus orci in diam tempor, a scelerisque ligula hendrerit.",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      data: "21/10/2022 15:00",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices cursus mi quis consectetur. Nullam ac turpis quis magna sollicitudin pretium id eget lorem. Vivamus auctor feugiat dolor, non sagittis erat vulputate at. Aliquam vitae facilisis est. Maecenas faucibus orci in diam tempor, a scelerisque ligula hendrerit.",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      data: "21/10/2022 15:00",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices cursus mi quis consectetur. Nullam ac turpis quis magna sollicitudin pretium id eget lorem. Vivamus auctor feugiat dolor, non sagittis erat vulputate at. Aliquam vitae facilisis est. Maecenas faucibus orci in diam tempor, a scelerisque ligula hendrerit.",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      title: "Fourth Item",
      data: "21/10/2022 15:00",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices cursus mi quis consectetur. Nullam ac turpis quis magna sollicitudin pretium id eget lorem. Vivamus auctor feugiat dolor, non sagittis erat vulputate at. Aliquam vitae facilisis est. Maecenas faucibus orci in diam tempor, a scelerisque ligula hendrerit.",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d75",
      title: "Fifth Item",
      data: "21/10/2022 15:00",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices cursus mi quis consectetur. Nullam ac turpis quis magna sollicitudin pretium id eget lorem. Vivamus auctor feugiat dolor, non sagittis erat vulputate at. Aliquam vitae facilisis est. Maecenas faucibus orci in diam tempor, a scelerisque ligula hendrerit.",
    },
  ];

  const Item = ({ item }) => (
    <View style={styles.divnoticia}>
      <Text style={styles.titulonoticia}>{item.title}</Text>
      <Text style={styles.subtitulonoticia}>{item.data}</Text>
      <Text style={styles.textonoticia}>{item.texto}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.divtitle}>
        <Text style={styles.subtitle}>Olá</Text>
        <Text style={styles.title}>Campelo Neto</Text>
      </View>
      <View style={styles.divnoticias}>
        <Text style={styles.labelnoticia}>Últimas notícias:</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.divsroll}
          data={DATA}
          renderItem={Item}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
}
