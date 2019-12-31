import * as types from './types'

export const mutations = {
    [types.STORE_HERO](state, hero) {
        state.hero = hero;
    },
    [types.STORE_COMICS](state, comics) {
        state.comics = comics
    },
    [types.ALERT](state, msg) {
        state.alert.status = true;
        state.alert.msg = msg
    }
};