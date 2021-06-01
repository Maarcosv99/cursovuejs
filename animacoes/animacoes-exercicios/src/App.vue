<template>
	<div id="app" class="container">
		<h1>Animações</h1>
    <!--
    <hr>
    <b-button
        variant="primary" class="mb-4"
        @click="exibir = !exibir"
    >Mostrar mensagem</b-button>

   <transition name="fade" appear>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>

    <transition
        enter-active-class="animated bounce"
        leave-active-class="animated shake"
    >
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>

    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
    </transition>

    <hr>

    <button @click="exibir2 = !exibir2">Alternar</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      >
      <div v-if="exibir2" class="caixa"></div>
    </transition>

    <hr>
    <div class="mb-4">
      <b-button variant="primary" class="mr-2" @click="componentSelecionado = 'AlertaInfo'">Info</b-button>
      <b-button variant="warning" @click="componentSelecionado = 'AlertaAdvertencia'">Advertencia</b-button>
    </div>

    <transition name="slide" mode="out-in">
      <component :is="componentSelecionado" />
    </transition>-->
    <hr>
    <b-button variant="success" @click="adicionarAluno" class="mb-4">Adicionar aluno</b-button>
    <transition-group name="slide" tag="div">
      <b-list-group v-for="(aluno, index) in alunos" :key="aluno">
        <b-list-group-item @click="removerAluno(index)">{{ aluno }}</b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia";
import AlertaInfo from "./AlertaInfo";

export default {
  components: { AlertaAdvertencia, AlertaInfo },
  data() {
    return {
      alunos: ['Roberto', 'Julia', 'Tereza', 'Paulo'],
      msg: 'Uma mensagem de informação para o usuário!',
      exibir: false,
      exibir2: true,
      tipoAnimacao: 'fade',
      larguraBase: 0,
      componentSelecionado: 'AlertaInfo',
    }
  },
  methods: {
    adicionarAluno() {
      const s = Math.random().toString(36).substring(2)
      this.alunos.push(s)
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1)
    },
    animar(el, done, negativo) {
      let rodada = 1
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + (negativo ? - rodada * 10 : rodada * 10)
        el.style.width = `${novaLargura}px`
        rodada++
        if (rodada > 30) {
          clearInterval(temporizador)
          done()
        }
      }, 20)
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`
    },
    enter(el, done) {
      this.animar(el, done, false)
    },
    beforeLeave(el) {
      this.larguraBase = 300
      el.style.width = `${this.larguraBase}px`
    },
    leave(el, done) {
      this.animar(el, done, true)
    },
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
	font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
  border-radius: 7px;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from { transform: translateY(40px); }
  to { transform: translateY(0); }
}

@keyframes slide-out {
  from { transform: translateY(0); }
  to { transform: translateY(40px); }
}

.slide-enter-active {
  z-index: 1;
  animation: slide-in .5s ease;
  transition: opacity .5s;
}

.slide-leave-active {
  position: absolute;
  width: 100%;
  z-index: 0;
  animation: slide-out .5s ease;
  transition: opacity .5s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}

.slide-move {
  z-index: 1;
  transition: transform .5s;
}

</style>
