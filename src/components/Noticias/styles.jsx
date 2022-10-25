import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,            
      backgroundColor: '#0d1921',      
    },

    divtitle:{
        marginTop:  '10%',
        marginLeft: '10%',
    },
    title: {
        color: '#ffffff',
        fontSize: 35,
        fontWeight: "bold",
        marginTop: 10,
    },
    subtitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: "bold"
    },

    divnoticias:{
        marginTop: '10%',
        width: '80%',
        marginLeft: '10%',
        flex: 1,
        
    },
    labelnoticia: {
        color: '#ffffff',
        fontSize: 25,
        marginBottom: '5%',
    },
    divsroll:{
        height: '100%',
        flex: 1,
    },
    divnoticia:{
        marginBottom: '7%',
    },
    titulonoticia: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'justify'
    },
    divsubtitulo:{
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },   
   
    subtitulonoticia: {
        color: '#ffffff',
        fontSize: 12,
    },
    textonoticia: {
        marginTop: '2%',
        color: '#ffffff',
        fontSize: 15,
        textAlign: 'justify',
    },

    divpaginacao:{
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 50,
    },   
   

     textButton:{
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 20,
     },



});

export default styles;