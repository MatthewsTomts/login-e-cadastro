import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Modal
} from "react-native";
import { styles } from "../style.js";
import { useState } from "react";

export default function Tarefas() {
  const [modalCad, setModalCad] = useState(false)

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

            <TouchableOpacity style={styles.fechaModal} onPress={()=> setModalCad(!modalCad)}>
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

      </View>
      <View style={styles.box}></View>
    </View>
  );
}
