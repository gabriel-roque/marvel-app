import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome";
import SearchHeroes from "./views/character/SearchHeroes";
import ProfileHero from "./views/character/ProfileHero";

Vue.use(Router);

const routesObject = [
    {
        path: "/",
        name: 'welcome',
        component: Welcome,
        props: true,
    },
    {
        path: "/heroes",
        name: 'heroes.search',
        component: SearchHeroes,
        props: true,
    },
    {
        path: "/heroes/profile",
        name: 'heroes.profile',
        component: ProfileHero,
        props: true,
    },
];

const router = new Router({
    mode: "history",
    routes: routesObject
});

export default router;