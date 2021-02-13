import Vue from 'vue'
import Vuex from 'vuex'
import cardDeck from './cardDeck.js'
import rounds from './rounds.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    deck: cardDeck,
    rounds: rounds,
  }
})
