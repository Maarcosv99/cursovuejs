export default {
    state: {
        produtos: [
        ],
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        /* Para acessar o estado global, coloque o parâmetro
        "rootState */
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        },
    },
    actions: {
        adicionarProduto: {
            root: true,
            handler({ commit }, payload) {
                setTimeout(() => {
                    commit('adicionarProduto', payload)
                }, 1000)
            }
        }
    }
}