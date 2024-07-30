import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import styles from './Estilo';

class Sorte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoFrase: '',
            img: require('../../assets/images/biscoitinhoFechado.png')
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
        this.novoBiscoito = this.novoBiscoito.bind(this);

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

    quebraBiscoito() {
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        var contador = 0;
        this.setState({
            textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
            img: require('../../assets/images/biscoitinhoAberto.png')
        });

    }
    novoBiscoito() {
        this.setState({
            textoFrase: ' ',
            img: require('../../assets/images/biscoitinhoFechado.png')
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
                <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>Biscoito da sorte</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={this.novoBiscoito}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>Novo Biscoito</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Sorte;