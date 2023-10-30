import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Alert
} from "react-native";

import { useEffect } from "react";
import { styles } from "../style.js";
import Global from "./global.js";


export default function Tarefas() {
  async function pegarTarefas() {
    const idUser = Global.idUser;
    const token = Global.token;


    const requisicao = await fetch(`https://awakeapp.mangosea-272fa7ab.brazilsouth.azurecontainerapps.io/tasks/${idUser}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    });

    const resposta = await requisicao.json();

    console.log(resposta.length);

    // esse [0] é o dicionario de todas as informacoes da task, os campos retornados na api sao:
    `{
      "idTask": 2,
      "fk_idUser": 11,
      "Titulo": "teste de task",
      "Status": "Pendente",
      "Criado": "2023-10-30T02:36:40.000Z"
    }`
    // caso tenha 2 tasks do cara, a primeira task será resposta[0] e a segunda será resposta[1]

    // realizar um loop para percorrer a lista das tasks desse cara e pegar os campos para jogar na tela

  }

  `[
    {
      "idTask": 2,
      "fk_idUser": 11,
      "Titulo": "teste de task",
      "Status": "Pendente",
      "Criado": "2023-10-30T02:36:40.000Z"
    }
  ]`

  useEffect(() => {
    pegarTarefas();
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
