<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
    <p>{{ 'Meu nome é Marcos Viana' | tudoVirgula }}</p>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <p>{{ 'Pedro é legal' | contaPalavras }}</p>

		<!-- Exercício 3 -->
    <hr>
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <p>{{ meuNome | tudoVirgula }}</p>
    <p>{{ frasePedro | contaPalavras }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import computedExercicioMixin from "@/computedExercicioMixin";

export default {
  mixins: [computedExercicioMixin],
	filters: {
	  tudoVirgula(value) {
	    return value.split(' ').join(',')
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
</style>
