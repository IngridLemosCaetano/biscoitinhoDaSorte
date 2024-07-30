import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './Estilo';

class Sorte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoFrase: '',
            img: require('../../assets/images/biscoitinhoFechado.png'),
            fraseAnterior: '',
            botaoTexto: 'Biscoito da Sorte' // Texto inicial do botão
        };

        this.acaoBotao = this.acaoBotao.bind(this);

        this.frases = [
            'A única maneira de fazer um ótimo trabalho é amar o que você faz.',
            'A persistência é o caminho do êxito.',
            'Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.',
            'Não importa quão devagar você vá, desde que você não pare.',
            'O que você faz hoje pode melhorar todos os seus amanhãs.',
            'Sonhe grande e ouse falhar.',
            'A vida é 10% o que acontece com você e 90% como você reage.',
            'O único lugar onde o sucesso vem antes do trabalho é no dicionário.',
            'Grandes realizações não são feitas por impulso, mas por uma soma de pequenas realizações.',
            'A maior glória em viver não está em nunca cair, mas em nos levantar cada vez que caímos.',
            'Acredite em si mesmo e todo o resto virá naturalmente.',
            'Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo.',
            'O sucesso é a soma de pequenos esforços, repetidos dia após dia.',
            'A única limitação para o nosso sucesso de amanhã são as nossas dúvidas de hoje.',
            'Você é o único responsável pelo seu sucesso.',
            'Se você pode sonhar, você pode fazer.',
            'Você nunca sabe a força que tem. Até que sua única alternativa é ser forte.',
            'A coragem não é a ausência do medo, mas a decisão de que algo é mais importante que o medo.',
            'A diferença entre o ordinário e o extraordinário é aquele pouquinho extra.',
            'Não é a força, mas a constância dos bons sentimentos que conduz os homens à felicidade.'
        ];
    }

    acaoBotao() {
        if (this.state.botaoTexto === 'Biscoito da Sorte') {
            this.quebraBiscoito();
        } else {
            this.novoBiscoito();
        }
    }

    quebraBiscoito() {
        let numeroAleatorio;
        let novaFrase;

        do {
            numeroAleatorio = Math.floor(Math.random() * this.frases.length);
            novaFrase = this.frases[numeroAleatorio];
        } while (novaFrase === this.state.fraseAnterior);

        this.setState({
            textoFrase: ' "' + novaFrase + '" ',
            img: require('../../assets/images/biscoitinhoAberto.png'),
            fraseAnterior: novaFrase,
            botaoTexto: 'Novo Biscoito' // Muda o texto do botão
        });
    }

    novoBiscoito() {
        this.setState({
            textoFrase: ' ',
            img: require('../../assets/images/biscoitinhoFechado.png'),
            botaoTexto: 'Biscoito da Sorte' // Muda o texto do botão
        });
    }

    render() {
        return (
            <View style={styles.container} >
                <Image
                    source={this.state.img}
                    style={styles.img}
                />
                <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
                <TouchableOpacity style={styles.botao} onPress={this.acaoBotao}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>{this.state.botaoTexto}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Sorte;
