import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,            
      backgroundColor: '#0d1921',      
    },

    divtitle:{
        marginTop:  '10%',
        marginLeft: '10%',
        width: '80%',
    },
    title: {
        color: '#ffffff',
        fontSize: 35,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: 'justify',
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

    divform:{
        alignItems: "center",
        justifyContent: "center", 
        marginTop: 50,
    },   
    label: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 20,
    },
    label2: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 40,
    },
    input:{
        width: "70%",
        backgroundColor: "#333f48",
        textAlign: 'center',
        height:50,

        borderBottomWidth: 1,
        borderColor: "#ffffff",
        color: "#ffffff",
    },

    button:{
        marginTop: 40,
        backgroundColor: '#333f48',
        width: '70%',
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
     },
     textButton:{
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 20,
     },
     labelesquecisenha: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 30,
    },
    labelcadastrese: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 80,
    },

    fonte: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 50,
    },
});

export default styles;