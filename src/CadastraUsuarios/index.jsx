import { useState } from "react";
import apiLocal from '../api/apiLocal'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './Cadastro.css'

const Registro = () => {
    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const mudarTela = useNavigate('')

    async function cadastroUsuarios(e) {
        try {
            e.preventDefault()
            if (!nome || !email || !password) {
                alert("Campos em Branco")
                return
            }
            await apiLocal.post('/CadastroUsuarios', {
                nome,
                email,
                password
            })
            toast.success('Cadastro Efetuado Com Sucesso', {
                toastId: 'ToastId'
            })
            mudarTela('/')

        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            })
        }

    }
    return (
        <div className="CadastroInicio">
            <div className="cadastro-container">
                <h1>Registro</h1>
                <form onSubmit={cadastroUsuarios}>
                    <div className="nome-cadastro">
                        <input
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="email-cadastro">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="senha-cadastro" >
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button className="button-login-Cadastro" type="submit">Registrar Usuario</button>
                    <div className="forgot-password" >
                        <p>Esqueceu  a senha?
                            <a href="#" className="span-password">Recuperar a senha</a></p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Registro;
