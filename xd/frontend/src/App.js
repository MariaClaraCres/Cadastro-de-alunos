import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [novoAluno, setNovoAluno] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: ''
  });

  useEffect(() => {
    buscarAlunos();
  }, []);

  const buscarAlunos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/alunos');
      setAlunos(response.data);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
    }
  };

  const adicionarAluno = async () => {
    if (!novoAluno.nome || !novoAluno.email) {
      alert('Nome e Email são obrigatórios!');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/alunos', novoAluno);
      setNovoAluno({ nome: '', endereco: '', email: '', telefone: '' });
      buscarAlunos();
    } catch (error) {
      console.error('Erro ao adicionar aluno:', error);
    }
  };

  const excluirAluno = async (id) => {
    try {
      await axios.delete('http://localhost:8080/api/alunos/${id}');
      buscarAlunos();
    } catch (error) {
      console.error('Erro ao excluir aluno:', error);
    }
  };

  return (
    <div className="App">
      <h1>Cadastro de Alunos</h1>

      <div className="form">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoAluno.nome}
          onChange={(e) => setNovoAluno({ ...novoAluno, nome: e.target.value })}
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={novoAluno.endereco}
          onChange={(e) => setNovoAluno({ ...novoAluno, endereco: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={novoAluno.email}
          onChange={(e) => setNovoAluno({ ...novoAluno, email: e.target.value })}
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={novoAluno.telefone}
          onChange={(e) => setNovoAluno({ ...novoAluno, telefone: e.target.value })}
        />
        <button onClick={adicionarAluno}>Adicionar</button>
      </div>

      <ul className="lista">
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            <strong>{aluno.nome}</strong> - {aluno.endereco} - {aluno.email} - {aluno.telefone}
            <button onClick={() => excluirAluno(aluno.id)} style={{ marginLeft: '10px' }}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;