import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Menu from '@/components/template/Menu'
import MenuAlt from '@/components/template/MenuAlt'

//import Usuario from '@/components/usuario/Usuario'
//import UsuarioLista from '@/components/usuario/UsuarioLista'
//import UsuarioEditar from '@/components/usuario/UsuarioEditar'
//import UsuarioDetalhe from "@/components/usuario/UsuarioDetalhe"

Vue.use(Router)

const Usuario = () => import(/* webpackChunkName: "usuario" */'@/components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'@/components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'@/components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'@/components/usuario/UsuarioEditar')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if(to.hash) {
            return { selector: to.hash }
        } else {
            return {x:0, y: 0}
        }
    },
    routes: [
        {
            name: 'inicio',
            path: '/',
            //component: Inicio,
            components: {
                default: Inicio,
                menu: Menu,
            },
        },
        {
            path: '/usuario',
            //component: Usuario,
            components: {
                default: Usuario,
                menu: MenuAlt,
                menuInferior: MenuAlt
            },
            props: true,
            children: [
                { path: '', component: UsuarioLista }, // host/usuario
                { path: ':id', component: UsuarioDetalhe, props: true,
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                }, // host/usuario/<id>
                { path: ':id/editar', name: 'editarUsuario', component: UsuarioEditar, props: true} // host/usuario/<id>/editar
            ]
        },
        {
            path: '/redirecionar',
            redirect: '/usuario'
        },
        { // Colocar sempre em última rota.
            path: '*',
            redirect: '/' // Ou retorna para 404
        }
    ]
})

/*router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global')
    next()
    (to.path !== '/usuario') {
        next('/usuario')
    } else {
        next()
    }
})*/

export default router