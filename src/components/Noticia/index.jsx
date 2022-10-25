import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import styles from "./styles";
import RenderHtml from 'react-native-render-html';
import Moment from 'moment';


export default function Noticia({ route, navigation }) {
  var text = '';
  const { width } = useWindowDimensions();
    var conteudo = {html: route.params.conteudo}
  useFocusEffect(
    React.useCallback(() => {     
        console.log()
    }, [])
  );

  const tagsStyles = {
    body: {
        marginTop: '2%',
        color: '#ffffff',
        fontSize: 12,
        textAlign: 'justify',
    },
    a: {
      color: '#ffffff',
    }
  };


  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <View style={styles.divtitle}>
        {/* <Text style={styles.subtitle}>Olá</Text> */}
        <Text style={styles.title}>{route.params.titulo}</Text>
      </View>
      <View style={styles.divnoticias}>
        {/* <Text style={styles.labelnoticia}>Últimas notícias:</Text> */}
        <View style={styles.divnoticia}>
            <Text style={styles.subtitulonoticia}>{Moment(route.params.data).format('DD/MM/YYYY HH:mm')}</Text>
            {/* <Text style={styles.textonoticia}>{item.conteudo}</Text> */}
              <RenderHtml
            tagsStyles={tagsStyles}
            contentWidth={width}
            source={conteudo}
            />  
            <Text style={styles.fonte}>Fonte: Gazeta Esportiva</Text>
        </View>
        
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
