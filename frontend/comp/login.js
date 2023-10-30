import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert} from 'react-native';
import { useState } from 'react';
import {styles} from '../style.js'
import { useNavigation } from '@react-navigation/native';
import Global from './global.js';

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigation = useNavigation();

    function telaTarefas () {
        navigation.navigate('tarefas');
    }

    async function entrar() {
        const login = email.trim();
        const password = senha.trim();

        if (login == '' || password == '') {
            Alert.alert('Cuidado', 'Campos não podem possuir só espaços ou ficar vazio');
        } else {
            const dadossEnviados = {
                email: login,
                senha: password
            };

            try {
                const requisicao = await fetch (`https://awakeapp.mangosea-272fa7ab.brazilsouth.azurecontainerapps.io/user/login`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dadossEnviados)
                })
    
                const resposta = await requisicao.json();
    
                
    
                if (resposta.msg == "Autenticação válida!") {
                    const id = resposta.idUser; 
                    const idFormatado = id.toString();
                    Global.token = resposta.token;
                    Global.idUser = idFormatado;
                    Alert.alert('BEM VINDO', 'Login bem sucedido');
                    return true;
    
                } else {
                    Alert.alert('OPS!', resposta.msg);
                    return false;
                }

            } catch(error) {
                console.log(error)
            }
    

        }
    }

    const logar = async () => {
        const logou = await entrar();

        if (logou) {
            telaTarefas();

        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.box}>
            <Text style={styles.frase}>Fazer login</Text>
            <Text style={styles.subTitulo}>Entre com suas informações de cadastro</Text>
            </View>

            <View style={styles.box}>

            <TextInput
                style={styles.input}
                onChangeText={(e) => setEmail(e)}
                value={email}
                placeholder="E-mail"
                />

            <View style={styles.viewSenha}>
                <TextInput
                    style={styles.inputSenha}
                    onChangeText={(e) => setSenha(e)}
                    value={senha}
                    placeholder="Senha"
                    />
                <Image
                    style={styles.olho}
                    source={require('../assets/olhoSenha.png')}
                    />
            </View>
                    </View>

            <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>

            <TouchableOpacity style={styles.login} onPress={logar}>
                <Text style={styles.txtLogin}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cadastro} onPress={() => navigation.replace('cadastro')}>
                <Text style={styles.txtCadastro}>Criar nova conta</Text>
            </TouchableOpacity>

            <Text style={{fontWeight: 'bold'}}>Ou continue com</Text>

            <Image
                style={styles.gmail}
                source={require('../assets/entrarGmail.png')}
            />

            <View style={styles.box}></View>
        </View>
    )
}