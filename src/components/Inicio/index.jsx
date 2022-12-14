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
import Itens from "./Itens";


export default function Inicio() {

  const [refreshing, setRefreshing] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [totalpaginas, setTotalPaginas] = useState(0);
  const [pagina, setPagina] = useState(1);
  const [time, setTime] = useState('fortaleza');
  var text = '';

  useFocusEffect(
    React.useCallback(() => {
      //getNoticias();
      //console.log('result');
      axios.get('https://www.gazetaesportiva.com/wp-json/gazeta_esportiva/v1/noticias?categoria='+time+'&pagina='+pagina)
      .then(function (response) {
        setNoticias(response.data.noticias);
        //setTotalPaginas(response.total_de_paginas);
        //console.log(response.data)
      })
      .catch(function (error) {
        
      });
    

    }, [])
  );

  const onRefresh = React.useCallback(() => {
    getNoticias();
  }, []);

  async function getNoticias() {
    axios.get('https://www.gazetaesportiva.com/wp-json/gazeta_esportiva/v1/noticias?categoria='+time+'&pagina='+pagina, {
        "Content-Type": "application/xml; charset=utf-8"
       })
      .then(function (response) {
        setNoticias(response.data.noticias);
        //setTotalPaginas(response.total_de_paginas);
        //console.log(response.json());
        //console.log(JSON.parse(JSON.stringify(response)));
      })
      .catch(function (error) {
        
      });


  }

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
          data={noticias}
          renderItem={({item})=>{
            return <Itens 
              titulo={item.titulo} 
              data={item.data} 
              conteudo={item.conteudo} 
              permalink={item.permalink} 
              formato={item.formato}
              galeria={item.galeria}
              id={item.id} 
              
              />
        }}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
}
