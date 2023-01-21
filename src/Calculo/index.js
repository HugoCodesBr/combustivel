import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Modal } from 'react-native';

export default class Calculo extends Component{
    render(){
        return(
            <Modal
            animationType='slide'
            visible={this.props.aberto}
            >
                <View style={styles.container}>
                <Image
                source={require('../assets/gas.png')}
                style={styles.gas}
                />
                <Text style={styles.tituloResult}>Compensa usar Álcool</Text>

                <View style={styles.precos}>
                    <Text style={styles.tituloPrecos}>Com os preços:</Text>
                    <Text style={styles.preco}>Álcool: R$ 4.60</Text>
                    <Text style={styles.preco}>Gasolina: R$ 7.60</Text>
                </View>

                <TouchableOpacity style={styles.btnVoltar} onPress={() => this.sair()}>
                    <Text style={styles.txtVoltar}>Calcular novamente</Text>
                </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}
