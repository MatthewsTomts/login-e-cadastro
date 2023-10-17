import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '100%',
    paddingHorizontal: '5%'
  },
  backImg:{
    width: '100%',
    height: '100%'
  },
  logo:{
    position: 'absolute',
    top: 20,
    right: 10,
    width: 150,
    objectFit: 'contain'
  },
  welcome:{
    
  },
  frase:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'blue'
  },
  subFrase:{
    textAlign: 'center'
  },
  botoesInicio:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingBottom: '15%'
  },
  botaoLogin:{
    backgroundColor: '#1F41BB',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
    
  },
  botaoCad:{
    borderWidth: 3,
    borderColor: '#1F41BB',
    borderStyle: 'solid',
    color: 'black',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 5
  }
})

export {styles}