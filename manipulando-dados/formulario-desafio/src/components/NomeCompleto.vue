<template>
  <div>
      <Rotulo nome="Primeiro nome">
          <input type="text" @input="$emit('input', value)" :value="value.primeiroNome" placeholder="Digite o primeiro nome" />
      </Rotulo>
      <Rotulo nome="Sobrenome">
          <input type="text" @input="$emit('input', value)" :value="value.ultimoNome" placeholder="Digite o sobrenome" />
      </Rotulo>
  </div>
</template>

<script>
import Rotulo from '@/components/Rotulo.vue'

export default {
    components: { Rotulo },
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    methods: {
        alterarNome(event) {
            this.$emit('input', {
                primeiroNome: event.target.value,
                ultimoNome: this.value.ultimoNome
            })
        },
        alterarSobrenome(event) {
            this.$emit('input', {
                primeiroNome: this.value.primeiroNome,
                ultimoNome: event.target.value
            })
        }
    }
}
</script>

<style>

</style>