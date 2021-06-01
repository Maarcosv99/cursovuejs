export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maçã', 'laranja']
        }
    },
    created() {
        console.log('Created - Frutas Mixin')
    },
    methods: {
        add() {
            this.frutas.push(this.fruta);
            this.fruta = ''
        }
    }
}