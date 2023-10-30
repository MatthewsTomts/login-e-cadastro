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
  ScrollView,
  SafeAreaView
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { styles } from "../style.js";
import Global from "./global.js";


export default function Tarefas() {
  const [modalCad, setModalCad] = useState(false)
  const [novaTask, setNovaTask] = useState('')
  const [tarefas, setTarefas] = useState()
  const [modalEdi, setModalEdi] = useState(false)
  const [idTask, setIdTask] = useState()
  const [tituloTask, setTituloTask] = useState()
  const [reload, setReload] = useState(false)

  // abre modal de ediçao e salta id e titulo da tarefa
  function editaTarefa(id, titulo) {
    setModalEdi(true)
    setIdTask(id)
    setTituloTask(titulo)
  }

  // fecha modal de ediçao e limpa id e titulo da tarefa
  function fechaEditarTarefa() {
    setModalEdi(false)
    setIdTask(null)
    setTituloTask(null)
  }

  async function pegarTarefas() {
    const idUser = Global.idUser;
    const token = Global.token;

    try {
      
      const requisicao = await fetch(`https://awakeapp.mangosea-272fa7ab.brazilsouth.azurecontainerapps.io/tasks/${idUser}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'authorization': token
        }
      });
  
      const resposta = await requisicao.json();
  
      var element = []
      for (let i = 0; i < resposta.length; i++) {
        element.push(
          <TouchableOpacity style={resposta[i].Status == 'Pendente' ? styles.tarefa : styles.tarefaConcluida}
            onPress={() => editaTarefa(resposta[i].idTask, resposta[i].Titulo)}>
            <Text>{resposta[i].Titulo}</Text>
            <Image source={resposta[i].Status == 'Pendente' ? require("../assets/pendente.png") : require("../assets/concluido.png")} />
          </TouchableOpacity>
        )
      }
  
      setTarefas(element)
    } catch(error) {
      console.log(error)
    }



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

  useEffect(() => {
    setModalCad(false);
    setModalEdi(false);
    setTarefas('');
    pegarTarefas();
    setReload(false);
  }, [reload]);


  async function cadastrarTarefa() {
    const task = novaTask;
    const idUsuario = Global.idUser;
    const token = Global.token;

    const dadosParaEnviar = {
      id : idUsuario,
      title : task
    };

    try {
      const requisicao = await fetch(`https://awakeapp.mangosea-272fa7ab.brazilsouth.azurecontainerapps.io/createTasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token
        },
        body: JSON.stringify(dadosParaEnviar)
      })
  
      const resposta = requisicao.json();
  
      setReload(true);
  
      console.log(resposta);

    } catch(error) {
      console.log(error)
    }
  }

  async function excluirTask() {
    const token = Global.token;
    const idDaTask = idTask;
  
    // Verifica se a variável idDaTask é nula
    if (!idDaTask) {
      // Exibe um erro para o usuário
      Alert.alert("O ID da tarefa é obrigatório");
      return false;
    }
    
    try {
      const requisicao = await fetch(`https://awakeapp.mangosea-272fa7ab.brazilsouth.azurecontainerapps.io/tasks/${idDaTask}`, {
        method: 'DELETE',
        headers: {
          'Content-type' : 'application/json',
          'authorization': token
        }
      })
    
      const resposta = await requisicao.json();
    
      console.log(resposta);  
    
      if (resposta.msg == "Task apagada com sucesso") {
        Alert.alert(resposta.msg);
        setReload(true);
        return true
      } else {
        Alert.alert(resposta.msg);
        return false
      }

    } catch(error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView >
      <ScrollView>
      

      <View style={{width: '100%', alignItems: 'flex-end', marginTop: 10}}>
        <Image source={require("../assets/logo.png")} style={styles.logoTarefa} />
      </View>

      <View style={styles.box}>
        <Text style={styles.frase}>Minhas tarefas</Text>
        <Text style={styles.subTituloTarefa}>
          Crie, visualize e conclua suas tarefas
        </Text>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={styles.criarTarefa} onPress={()=> setModalCad(true)}>
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
              <Text style={styles.txtFechaModal}>X</Text>
            </TouchableOpacity>
            <Text style={styles.frase}>Criar tarefa</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => setNovaTask(e)}
              value={() => ''}
              placeholder="Titulo da tarefa"
            />
            <TouchableOpacity style={styles.criarTarefa} onPress={cadastrarTarefa}>
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

          <View style={styles.modalEdi}>

            <TouchableOpacity style={styles.fechaModal} onPress={() => fechaEditarTarefa()}>
              <Text style={styles.txtFechaModal}>X</Text>
            </TouchableOpacity>
            <Text style={styles.frase}>Editar Tarefa</Text>
            <TextInput
              style={styles.input}
              onChangeText={() => null}
              value={tituloTask}
              placeholder="Titulo da tarefa"
            />

            <View style={{width: '100%', flexDirection: 'row', gap: 20}}>
              <TouchableOpacity style={styles.salvaTarefa} onPress={() => null}>
                  <Text style={styles.txtCriarTarefa}>Salvar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.excluirTarefa} onPress={excluirTask}>
                  <Text style={styles.txtCriarTarefa}>Excluir</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.concluirTarefa} onPress={() => null}>
                <Text style={styles.txtCriarTarefa}>concluir</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>

      <View style={styles.box}>
        {tarefas}
      </View>

      <View style={styles.box}></View>

      </ScrollView>
    </SafeAreaView>
  );
}
