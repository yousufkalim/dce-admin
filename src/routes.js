/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Clients from "views/clients/Clients";
import Register from "views/Register.js";
import Login from "views/Login.js";
import Designers from "views/designers/Designers";
import Orders from "views/orders/Orders";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-red",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/clients",
    name: "All Clients",
    icon: "ni ni-single-02 text-primary",
    component: Clients,
    layout: "/admin",
  },
  {
    path: "/designers",
    name: "All Designers",
    icon: "ni ni-single-02 text-primary",
    component: Designers,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "All Orders",
    icon: "ni ni-single-02 text-primary",
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/quotes",
    name: "All quotes",
    icon: "ni ni-single-02 text-primary",
    component: Orders,
    layout: "/admin",
  },

  {
    path: "/register",
    name: "Register",
    icon: "ni ni-key-25 text-info",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-circle-08 text-pink",
    component: Login,
    layout: "/auth",
  },
];
export default routes;
