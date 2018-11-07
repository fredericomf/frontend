import React from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';


export default class Login extends React.Component {

    state = {
        username: '',
    };

    handleInputChange = (event) => {
        this.setState({ username: event.target.value });
    };

    handleSubmit = (event) => {
        // NOTA_ESTUDO: Isso previne que o form, ao dar submit, vá para outra página ou tenha qualquer outro comportamento padrão chamado.
        event.preventDefault();

        const { username } = this.state;

        if (!username.length) return;

        // NOTA_ESTUDO: Aqui eu estou chamando o STORAGE do navegador para colocar um informação
        localStorage.setItem('@GoTwitter:username', username);

        this.props.history.push('/timeline');
    };

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Nome de usuário"
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}