import React, { useState } from "react";
import {
    Text,
    View,
    useWindowDimensions,
    Pressable
  } from "react-native";
  import styles from "../styles";
import RenderHtml from 'react-native-render-html';
import Moment from 'moment';
import { useNavigation } from "@react-navigation/native";

export default function Itens(props) {
  const navigation = useNavigation();
    const { width } = useWindowDimensions();
    var conteudo = {html: props.conteudo};

    async function showNoticia(props) {
      //console.log('login');
      navigation.navigate("Noticia", props);
    }

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

      
      
    return(
        <View style={styles.divnoticia}>
            <Pressable onPress={() => {
              showNoticia(props);
            }} ><Text style={styles.titulonoticia}>{props.titulo}</Text></Pressable>
            <View style={styles.divsubtitulo}>
              <Text style={styles.subtitulonoticia}>{Moment(props.data).format('DD/MM/YYYY HH:mm')}</Text>  
              {props.formato == 'standard' && (
                  <Text style={styles.subtitulonoticia}>Texto</Text>  
              )}
              {props.formato == 'gallery' && (
                  <Text style={styles.subtitulonoticia}>Fotos</Text>  
              )}
               {props.formato == 'video' && (
                  <Text style={styles.subtitulonoticia}>Vídeo</Text>  
              )}
            </View>
            {/* <Text style={styles.textonoticia}>{item.conteudo}</Text> */}
            {/* <RenderHtml
            tagsStyles={tagsStyles}
            contentWidth={width}
            source={conteudo}
            /> */}
        </View>
    )
}