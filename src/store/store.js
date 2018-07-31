import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        posts: []
    },
    actions: {
      getPosts() {
        return axios.get('http://gegeriyadi.test/wp-json/wp/v2/posts')
      },
      getSinglePost(id) {
        return axios.get('http://gegeriyadi.test/wp-json/wp/v2/posts/' + id)
      }
    },
    mutations: {
      setContent(state, payload) {
        state.posts = payload
      }
    }
})