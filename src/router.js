import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";

Vue.use(Router);

const routesObject = [
    {
        path: "/",
        component: Home,
        props: true,
        meta: {
            title: "home"
        }
    },
];

const router = new Router({
    mode: "history",
    routes: routesObject
});

export default router;