import {characterClient, AUTHORIZED, comicClient} from "@/plugins/axios";
import * as types from "./types";

export const searchHero = ({dispach, commit}, hero) => {
    characterClient.get(characterClient.baseURL,{params: {name: hero}})
        .then(resp => {
            const {data: {data}} = resp;
            const hero = data.results.shift();
            if (data.count >= 1) commit(types.STORE_HERO, hero)
        })
};

export const searchComicsHero = ({dispath, commit}, heroID) => {
    comicClient.get(`${heroID}/comics${AUTHORIZED}`)
        .then(resp => {
            const {data: {data}} = resp;
            if (data.count >= 1) commit(types.STORE_COMICS, data.results)
        })

};