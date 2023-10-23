import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: windowHeight,
    paddingHorizontal: '5%'
  },
  box:{
    alignItems: 'center',
    width: '100%',
    marginTop: '5%',
    gap: 20
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
  subTitulo:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
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
  },
  input:{
    textAlignVertical: 'center',
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    width: '100%',
    paddingVertical: '4%',
    paddingHorizontal: 20
  },
  inputSenha:{
    textAlignVertical: 'center',
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    width: '100%',
    paddingVertical: '4%',
    paddingHorizontal: 20,
  },
  viewSenha:{
    width: '100%',
    position: 'relative'
  },
  olho:{
    position: 'absolute',
    right: 20,
    top: '30%'
  },
  esqueceuSenha:{
    color: 'blue',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  login:{
    backgroundColor: 'blue',
    width: '100%',
    paddingVertical: '4%',
    borderRadius: 10,
    alignItems: 'center'
  },
  txtLogin:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  // cadastro:{
  //   borderWidth: 2,
  //   borderColor: 'blue',
  //   borderRadius: 10,
  //   width: '100%',
  //   paddingVertical: '4%',
  //   alignItems: 'center'
  // },
  txtCadastro:{
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold'
  },
  gmail:{
    width: '80%',
    objectFit: 'contain'
  },
criarConta: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F41BB'
  },
  tituloCriar: {
    alignItems: 'center',
    width: '80%',
    flexDirection: 'column',
    gap: 8
  },
  crieConta: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center'
  },
  inputCad: {
    backgroundColor: '#F1F4FF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '90%',
    borderRadius: 10
  },
  form: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 24
  },
  cadastroCad: {
    paddingVertical: '15%',
    alignItems: 'center',
    minHeight: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'column',
    flex: 1,
    gap: 56,
  },
  inputSenhaCad: {
    backgroundColor: '#F1F4FF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '90%',
    borderRadius: 10,
    position: 'relative'
  },
  textoBtn: {
    fontWeight: '600',
    fontSize: 20,
    color: '#fff'
  },
  btnCad: {
    backgroundColor: '#1F41BB',
    paddingHorizontal: '32%',
    paddingVertical: 16,
    borderRadius: 10
  },
  conta: {
    flexDirection: 'column',
    gap: 30,
    alignItems: 'center'
  },
  temConta: {
    fontWeight: '600',
    fontSize: 14,
    color: '#494949'
  },
  continueGoogle: {
    fontWeight: '600',
    fontSize: 14,
    color: '#1F41BB'
  },
  entrarGoogle: {
    color: '#FB332D',
    fontWeight: 'bold',
    fontSize: 20
  },
  google: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20
  },
  btnGoogle: {
    borderColor: '#FB332D',
    width: '80%',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 14,
    flexDirection: 'row',
    gap: 20,
  },
  logoGoogle: {
    width: 24,
    height: 24,
    alignItems: 'center',
    marginTop: 2
  },
  teste: {
    flex: 1,
    backgroundColor: '#fff'
  },
  olhoSenha: {
    position: 'absolute',
    right: 20,
    top: '85%'
  }
})

export {styles}