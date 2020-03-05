import React, { Component } from 'react';
import { isAutenticated } from './auth';

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Home from './../views/viewsPublic/landpage/landpageIndex'
import HomePrivate from './../views/HomePrivate'
import CadastroExt from './../views/CadastroExt'
import BioPerfil from './../views/Perfil/BioPerfil'
import Contato from './../views/Contato'
import ContatoPub from './../views/viewsPublic/ContatoPublic'
import Login from './../views/Login'
import SuasDoacoes from '../views/SuasDoacoes'
import NovoCadastro from './../views/NovoCadastro'
import NovoCadastroProduto from './../views/NovoCadastroProduto'
import DoacaoEnviada from'./../views/Confirm/DoacaoEnviada'
import CadastroRealizado from'./../views/Confirm/CadastroRealizado'
import DoacoesPerfil from './../views/Perfil/DoacoesPerfil'
import InteressesPerfil from './../views/Perfil/InteressesPerfil'
import ConfigPerfil from './../views/Perfil/ConfigPerfil'


const PrivateRoute = ({component: Component, ... rest}) =>(
    <Route 
        {... rest} 
        render={props => 
            isAutenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname:'/', state:{from: props.location} }} />
        )
    }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
        <PivateRoute exact path="/private" component={HomePrivate}/>
                    <PivateRoute exact path="/perfil" component={BioPerfil}/>     
                    <PivateRoute  path="/contato" component={Contato}/>
                    <PivateRoute  path="/doe" component={NovoCadastroProduto}/>
                    <PivateRoute path='/doacaoenviada' component={DoacaoEnviada}/>
                    <PivateRoute path='/CadastroRealizado' component={CadastroRealizado}/>
                    <PivateRoute exact path="/perfil/doacoes" component={DoacoesPerfil}/>   
                    <PivateRoute exact path="/perfil/interesses" component={InteressesPerfil}/>   
                    <PivateRoute exact path="/perfil/config" component={ConfigPerfil}/> 
                    <PivateRoute exact path="/home/suasdoacoes" component={SuasDoacoes}/> 
            <Route exact path="/" component={() => <h1>Hello world!</h1>} />
        <PrivateRoute exact path="/asd" component={() => <h1>Oce logo</h1> }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
