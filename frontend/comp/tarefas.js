import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";

import { useEffect } from "react";
import { styles } from "../style.js";
import Global from "./global.js";


export default function Tarefas() {
  async function pegarTarefas() {
    
  }

  useEffect(() => {

  }, [])
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <View style={styles.box}>
        <Text style={styles.frase}>Minhas tarefas</Text>
        <Text style={styles.subTituloTarefa}>
          Crie, visualize e conclua suas tarefas
        </Text>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={styles.criarTarefa}>
          <View style={{ flexDirection: "row", width: 120 }}>
            <Text style={styles.txtCriarTarefa}>Criar nova tarefa</Text>
            <Image
              style={{ marginTop: "2%", marginLeft: "2%" }}
              source={require("../assets/mais.png")}
            />
          </View>
        </TouchableOpacity>

        
      </View>
      <View style={styles.box}></View>
    </View>
  );
}
