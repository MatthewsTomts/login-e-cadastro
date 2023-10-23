import { styles } from '../style.js'
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

export default function Cadastro(){

    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confSenha, setConfSenha] = useState('')

    return(
        <View style={styles.teste}>
            
                <View style={styles.cadastroCad}>
                    <View style={styles.tituloCriar}>
                        <Text style={styles.criarConta}>Criar conta</Text>
                        <Text style={styles.crieConta}>Crie uma conta para armazenar todas as suas tarefas</Text>
                    </View>

                    <View style={styles.form}>
                        <TextInput placeholder='E-mail' value={email} style={styles.inputCad} onChangeText={(e) => {setEmail(e)}} />
                        <View style={styles.inputSenhaCad}>
                            <TextInput placeholder='Senha' value={senha} onChangeText={(e) => setSenha(e)} secureTextEntry />
                            <Image style={styles.olhoSenha} source={require('../assets/olhoSenha.png')} />
                        </View>
                        <View style={styles.inputSenhaCad}>
                            <TextInput placeholder='Confirmar senha' value={confSenha} onChangeText={setConfSenha} secureTextEntry />
                            <Image style={styles.olhoSenha} source={require('../assets/olhoSenha.png')} />
                        </View>
                    </View>

                    <View style={styles.conta}>
                        <TouchableOpacity style={styles.btnCad}>
                            <Text style={styles.textoBtn}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {navigation.replace('login')}}>
                            <Text style={styles.temConta}>Já possuo uma conta</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.google}>
                        <Text style={styles.continueGoogle}>Ou continue com</Text>

                        <TouchableOpacity style={styles.btnGoogle}>
                            <Image source={require('../assets/google.png')} style={styles.logoGoogle}/>
                            <Text style={styles.entrarGoogle}>Entrar com Google</Text>
                        </TouchableOpacity>
                    </View>

                </View>

        </View>
    )
}