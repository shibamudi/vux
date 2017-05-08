import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const state = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const getters = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const actions = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const mutations = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Vuex.Store({
  state,
  actions,
  mutations{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
