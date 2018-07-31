import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../Api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        posts: []
    },
    actions: {
      getPosts() {
        return Api().get('posts')
      },
      getSinglePost( param ) {
        return Api().get('posts/' + param)
      }
    },
    mutations: {
      setContent(state, payload) {
        state.posts = payload
      }
    }
})