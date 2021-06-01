<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
    <hr>

    <p>{{ cpfAluno | cpf | inverter }}</p>
    <input type="text" :value="cpfAluno | cpf | inverter" />

    <hr>

    <Frutas />

    <hr>

    <input type="text" v-model="fruta" @keydown.enter="add"/>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
	</div>
</template>

<script>
import usuarioMixin from "@/usuarioMixin";
import frutasMixin from '@/frutasMixin'
import Frutas from '@/Frutas.vue'

export default {
  components: { Frutas },
  mixins: [frutasMixin, usuarioMixin],
  created() {
    console.log('Created - App.vue')
  },
  filters: {
    cpf(valor) {
      const arr = `${valor}`.split('')
      arr.splice(3, 0, '.')
      arr.splice(7, 0, '.')
      arr.splice(11, 0, '-')
      return arr.join('')
    }
  },
  data() {
    return {
      cpfAluno: '06856792506'
    }
  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
  font-size: 1.5rem;
}
</style>
