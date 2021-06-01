<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: {{ inverterNome() }}</p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome()">Reiniciar o nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            default: 'Anônimo'
        },
        reiniciarFn: Function,
        idade: Number
    },
    created() {
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade;
        })
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome() {
            if (this.nome == 'Marcos') {
                this.nome = 'Viana'
            } else {
                this.nome = 'Marcos'
            }

            this.$emit('editNome', this.nome);
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
