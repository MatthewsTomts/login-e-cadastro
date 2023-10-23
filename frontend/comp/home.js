import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { styles } from "../style.js";
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="contain"
        style={styles.backImg}
      >
        <View style={styles.container}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Image
            source={require("../assets/welcome.png")}
            style={styles.welcome}
          />
          <Text style={styles.frase}>Organize suas tarefas facilmente!</Text>
          <Text style={styles.subFrase}>
            Liste todas suas tarefas diarias, organize e marque como concluida
            suas tareafas finalizadas.
          </Text>

          <View style={styles.botoesInicio}>
            <TouchableOpacity style={styles.botaoLogin}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}} onPress={()=> navigation.replace('login')}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoCad}>
                <Text style={{color: '#1F41BB', fontWeight: 'bold', fontSize: 15}}>Cadastro</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
