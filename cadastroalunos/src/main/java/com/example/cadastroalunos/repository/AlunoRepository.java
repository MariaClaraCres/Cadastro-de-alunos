package com.example.cadastroalunos.repository;
import com.example.cadastroalunos.model.Aluno;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AlunoRepository extends MongoRepository<Aluno, String> {
}
