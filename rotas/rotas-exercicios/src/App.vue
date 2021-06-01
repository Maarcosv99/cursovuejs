<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
    <router-view name="menu"></router-view>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <router-view />
    </transition>
    <router-view name="menuInferior"></router-view>
	</div>
</template>

<script>
export default {

}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
  button { margin: 7px 0px; cursor: pointer}
</style>
