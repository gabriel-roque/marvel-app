import Vue from 'vue'
import Vuex from 'vuex'

import character from '@/modules/character'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    character
  },
  strict: true
});
