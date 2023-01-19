import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      litroAlcool: 0,
      litroGasolina: 0,
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
        />
        <Text style={styles.titulo}>Qual melhor opção?</Text>

        <View style={styles.areaForm}>
          <Text style={styles.label}>Álcool (preço por litro):</Text>
          <TextInput
          style={styles.input}
          value={this.state.litroAlcool}
          onChangeText={ (litro) => this.setState({litroAlcool: litro})}
          keyboardType="numeric"
          />
          <Text style={styles.label}>Gasolina (preço por litro):</Text>
          <TextInput
          style={styles.input}
          value={this.state.litroGasolina}
          onChangeText={ (litro) => this.setState({litroGasolina: litro})}
          keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.btnCalculo}>
          <Text style={styles.txtCalculo}>Calcular</Text>
        </TouchableOpacity>

        <Modal
        animationType='slide'
        >
          <View style={styles.container}>
            <Image
            source={require('./assets/gas.png')}
            style={styles.gas}
            />
            <Text style={styles.tituloResult}>Compensa usar Álcool</Text>

            <View style={styles.precos}>
              <Text style={styles.tituloPrecos}>Com os preços:</Text>
              <Text style={styles.preco}>Álcool: R$ 4.60</Text>
              <Text style={styles.preco}>Gasolina: R$ 7.60</Text>
            </View>

            <TouchableOpacity>
              <Text>Calcular novamente</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  areaForm: {
    marginTop: 40,
    width: '100%',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 14,
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 8,
    borderRadius: 4,
  },
  btnCalculo: {
    backgroundColor: '#EF4130',
    width: '100%',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  txtCalculo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
