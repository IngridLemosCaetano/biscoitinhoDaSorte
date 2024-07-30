import {StyleSheet} from 'react-native';

export	default  StyleSheet.create({
    container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD3A6'
    },

    img:{
    width: 250,
    height: 250,
    },
    textoFrase:{
    fontSize: 20,
    color: '#000000',    
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: 'PoiretOne-Regular'
    },
    botao:{
    width: 230,
    height: 50,
    borderWidth: 2,    
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#000000',
    justifyContent: 'center'
    },
    btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    },
    btnTexto:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'Caveat-Regular'
    }
});