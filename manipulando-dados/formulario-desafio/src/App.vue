<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<NomeCompleto v-model="usuario.nomeCompleto" />
				<Rotulo nome="Email">
					<input type="email" v-model="usuario.email" placeholder="Digite o e-mail" />
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha" placeholder="Digite sua senha" />
				</Rotulo>
				<Rotulo nome="Armazenar dados?">
					<span>
						<input type="radio" v-model="usuario.armazenarDados" :value="true">Sim
					</span>
					<span>
						<input type="radio" v-model="usuario.armazenarDados" :value="false">Não
					</span>
				</Rotulo>
				<button @click.prevent="enviado = true">Enviar formulário</button>
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<p>Nome completo: {{ usuario.nomeCompleto.primeiroNome }} {{ usuario.nomeCompleto.ultimoNome }}</p>
				<p>E-mail: {{ usuario.email }}</p>
				<p>Senha: {{ usuario.senha }}</p>
				<p>Armazenar dados?: {{ usuario.armazenarDados }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from '@/components/Rotulo.vue'
import NomeCompleto from '@/components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data() {
		return {
			usuario: {
				nomeCompleto: {
					primeiroNome: 'Marcos',
					ultimoNome: 'Viana',
				},
				email: '',
				senha: '',
				armazenarDados: false
			},
			enviado: false
		}
	},
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
	text-align: left;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
	text-align: center;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
