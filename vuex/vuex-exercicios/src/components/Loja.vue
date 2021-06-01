<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade">
      <span>itens de <strong>R$</strong></span>
      <input type="number" v-model.number="preco">
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
import { mapActions } from 'vuex'

// Diferente dos getters que são dentro das propriedades computadas
// o mutation colocamos dentro dos metodos

export default {
  data() {
    return {
      sequencia: 1,
    }
  },
  computed: {
    quantidade() {
      return this.$store.state.parametros.quantidade
    },
    preco() {
      return this.$store.state.parametros.preco
    }
  },
  methods: {
    // Para funcionar precisa do operador spread '...'
    ...mapActions(['adicionarProduto']),
    /*...mapActions({
      addProduto: 'adicionarProduto'
    }),*/
    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco
      }
      this.sequencia++
      //this.$store.state.produtos.push(produto)
      // Vamos informar a mudança
      // this.$store.commit('nome da funcao do mutation', 'o payload, o dado que vai passar')
      //this.$store.commit('adicionarProduto', produto)

      // Utuilizando o método do setters
      //this.addProduto(produto)

      // Executando action
      this.$store.dispatch('adicionarProduto', produto)
    }
  }
}
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
