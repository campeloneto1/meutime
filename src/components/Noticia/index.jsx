import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  Dimensions,
  Image
} from "react-native";
import styles from "./styles";
import RenderHtml from 'react-native-render-html';
import Moment from 'moment';
import Carousel from 'react-native-reanimated-carousel';
import axios from "axios";

export default function Noticia({ route, navigation }) {
  var text = '';
  const { width } = useWindowDimensions();
  const width2 = Dimensions.get('window').width;
  var conteudo = {html: route.params.conteudo}
  var link = [];
  useFocusEffect(
    React.useCallback(() => {     
        if(route.params.formato == 'video'){
          //console.log()
          console.log(route.params.permalink);
          link = route.params.permalink.split('/');
          console.log(link[5]);

          axios.get('https://videos.gazetaesportiva.com/video/'+link[5])
            .then(function (response) {
             console.log(response);
            })
            .catch(function (error) {

            });
        }
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

              {route.params.formato == 'standard' && (
                  <RenderHtml
                  tagsStyles={tagsStyles}
                  contentWidth={width}
                  source={conteudo}
                  />  
              )}
              {route.params.formato == 'gallery' && (
                  <Carousel
                  loop
                  width={width2}
                  height={width2 / 1.5}
                  autoPlay={true}
                  data={route.params.galeria}
                  scrollAnimationDuration={5000}
                  panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                  }}
                  //onSnapToItem={(index) => console.log('current index:', index)}
                  renderItem={({ item }, index) => (
                      <View
                          style={{
                              marginTop: 20,
                              width: '80%',
                              flex: 1,
                              justifyContent: 'center',
                          }}
                      >
                          
                              <Image
                                    style={{
                                      
                                      width: '100%',
                                      flex: 1,
                                      justifyContent: 'center',
                                  }}
                                  source={{uri: item.url}}
                                />
                              <Text style={styles.foto}>{item.legenda}</Text>
                      </View>
                  )}
              />
              )}
              {route.params.formato == 'video' && (
                  <Text style={styles.subtitulonoticia}>Vídeo</Text>  
              )}

              
            <Text style={styles.fonte}>Fonte: Gazeta Esportiva</Text>
        </View>
        
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
