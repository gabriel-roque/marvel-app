import {characterClient, AUTHORIZED, comicClient} from "@/plugins/axios";
import * as types from "./types";

export const searchHero = ({commit}, hero) => {
    characterClient.get(characterClient.baseURL, {params: {name: hero}})
        .then(resp => {
            const {data: {data}} = resp;
            const hero = data.results.shift();

            commit(types.STORE_HERO, hero);
            if (data.count < 1) {
                commit(types.STORE_HERO, '');
                commit(types.ALERT, 'Hero not found, try again.')
            }
        })
        .catch(error => commit(types.ALERT, 'MARVEL API [Error]'))

};

export const searchComicsHero = ({commit}, heroID) => {
    comicClient.get(`${heroID}/comics${AUTHORIZED}`)
        .then(resp => {
            const {data: {data}} = resp;
            if (data.count >= 1) commit(types.STORE_COMICS, data.results)
        })
        .catch(error => commit(types.ALERT, 'MARVEL API [Error]'))

};