import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos
  },
  state: {
    title: 'Comments',
    
    links: [
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
      localStorage.setItem('ghgh',JSON.stringify(link))
    }
  },
  actions: {
  },
 
})
