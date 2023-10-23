import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {styles} from '../style.js'
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigation = useNavigation();

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

            <TouchableOpacity style={styles.login}>
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