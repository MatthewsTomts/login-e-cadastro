import { styles } from '../style.js'
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default function Cadastro(){

    const navigation = useNavigation();

    return(
        <View style={styles.teste}>
            <ImageBackground
                source={require("../assets/background.png")}
                resizeMode="contain"
                style={styles.backImg}
            >
            
                <View style={styles.cadastro}>
                    <View style={styles.tituloCriar}>
                        <Text style={styles.criarConta}>Criar conta</Text>
                        <Text style={styles.crieConta}>Crie uma conta para armazenar todas as suas tarefas</Text>
                    </View>

                    <View style={styles.form}>
                        <TextInput placeholder='E-mail' style={styles.input} />
                        <View style={styles.inputSenha}>
                            <TextInput placeholder='Senha' secureTextEntry />
                            <Image style={styles.olho} source={require('../assets/olhoSenha.png')} />
                        </View>
                        <View style={styles.inputSenha}>
                            <TextInput placeholder='Confirmar senha' secureTextEntry />
                            <Image style={styles.olho} source={require('../assets/olhoSenha.png')} />
                        </View>
                    </View>

                    <View style={styles.conta}>
                        <TouchableOpacity style={styles.btnCad}>
                            <Text style={styles.textoBtn}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {navigation.replace('home')}}>
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

            </ImageBackground>

        </View>
    )
}