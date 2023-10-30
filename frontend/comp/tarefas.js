import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { styles } from "../style.js";
import Global from "./global.js";


export default function Tarefas() {
  const [modalCad, setModalCad] = useState(false)
  const [tarefas, setTarefas] = useState()
  const [modalEdi, setModalEdi] = useState(false)
  const [idTask, setIdTask] = useState()
  const [tituloTask, setTituloTask] = useState()

  // abre modal de ediçao e salta id e titulo da tarefa
  function editaTarefa(id, titulo){
    setModalEdi(true)
    setIdTask(id)
    setTituloTask(titulo)
  }

  // fecha modal de ediçao e limpa id e titulo da tarefa
  function fechaEditarTarefa(){
    setModalEdi(false)
    setIdTask(null)
    setTituloTask(null)
  }

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

    var element = []
    for (let i = 0; i < resposta.length; i++) {
      element.push(<TouchableOpacity onPress={()=> editaTarefa(resposta[i].idTask, resposta[i].Titulo)}>
        <Text>{resposta[i].Titulo}</Text>
      </TouchableOpacity>)
    }

    setTarefas(element)

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
        <TouchableOpacity style={styles.criarTarefa} onPress={() => setModalCad(true)}>
          <View style={{ flexDirection: "row", width: 120 }}>
            <Text style={styles.txtCriarTarefa}>Criar nova tarefa</Text>
            <Image
              style={{ marginTop: "2%", marginLeft: "2%" }}
              source={require("../assets/mais.png")}
            />
          </View>
        </TouchableOpacity>


        {/* modal para criar tafera */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalCad}
        >

          <View style={styles.modalCad}>

            <TouchableOpacity style={styles.fechaModal} onPress={() => setModalCad(!modalCad)}>
              <Text>X</Text>
            </TouchableOpacity>
            <Text style={styles.frase}>Criar tarefa</Text>
            <TextInput
              style={styles.input}
              onChangeText={() => null}
              value={() => null}
              placeholder="Titulo da tarefa"
            />
            <TouchableOpacity style={styles.criarTarefa} onPress={() => null}>
              <View style={{ flexDirection: "row", width: 120 }}>
                <Text style={styles.txtCriarTarefa}>Cadastrar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* modal para criar tafera */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalEdi}
        >

          <View style={styles.modalCad}>

            <TouchableOpacity style={styles.fechaModal} onPress={() => fechaEditarTarefa()}>
              <Text>X</Text>
            </TouchableOpacity>
            <Text style={styles.frase}>Editar Tarefa</Text>
            <TextInput
              style={styles.input}
              onChangeText={() => null}
              value={tituloTask}
              placeholder="Titulo da tarefa"
            />
            <TouchableOpacity style={styles.criarTarefa} onPress={() => null}>
              <View style={{ flexDirection: "row", width: 120 }}>
                <Text style={styles.txtCriarTarefa}>Salvar</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.excluirTarefa} onPress={() => null}>
              <View style={{ flexDirection: "row", width: 120 }}>
                <Text style={styles.txtCriarTarefa}>Excluir</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.salvaTarefa} onPress={() => null}>
              <View style={{ flexDirection: "row", width: 120 }}>
                <Text style={styles.txtCriarTarefa}>concluir</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={styles.box}>
          {tarefas}
        </View>

      </View>
      <View style={styles.box}></View>
    </View>
  );
}
