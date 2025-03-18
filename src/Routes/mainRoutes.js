import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/welcome/index.js";
import Login from "../pages/login/cadastraSe.js";
import Confirm from "../pages/forget_passWord/confrimEmail.js";
import CodeCofirm from "../pages/forget_passWord/codeCofirm.js";
import Mapa from  "../../src/pages/mapa/mapa.js";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Define a rota para a página Welcome */}
                <Route path="/" element={<Welcome/>} />
                <Route path="/cadastro" element={<Login/>}/>
                <Route path="/cadastro/confimEmail" element={<Confirm/>}/>
                <Route path="/cadastro/confimEmail/codeCofirm" element={<CodeCofirm/>}/>
                <Route path="/mapa" element={<Mapa/>}/>
            </Routes>
        </BrowserRouter>
    );
}
