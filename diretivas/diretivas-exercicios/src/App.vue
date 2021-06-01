<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p>Diretiva fundo personalizado</p>
		<p v-escuta:click="mostreNome('Marcos')">
			Diretiva cor alternada
		</p>
	</div>
</template>

<script>
export default {
	directives: {
		escuta: {
			bind(el, binding) {
				el.addEventListener(binding.arg, () => {
					binding.value;
				});
			}
		}
	},
	methods: {
		mostreNome(nome) {
			document.body.style.backgroundColor = '#ccc';
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
