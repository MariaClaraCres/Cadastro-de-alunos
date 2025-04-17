package com.example.cadastroalunos.controller;

import com.example.cadastroalunos.model.Aluno;
import com.example.cadastroalunos.repository.AlunoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alunos")
@CrossOrigin(origins = "*") // Permite requisições do React
public class AlunoController {

    private final AlunoRepository alunoRepository;

    public AlunoController(AlunoRepository alunoRepository) {
        this.alunoRepository = alunoRepository;
    }

    @GetMapping
    public List<Aluno> listarAlunos() {
        return alunoRepository.findAll();
    }

    @PostMapping
    public Aluno adicionarAluno(@RequestBody Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    @DeleteMapping("/{id}")
    public void deletarAluno(@PathVariable String id) {
        alunoRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Aluno atualizarAluno(@PathVariable String id, @RequestBody Aluno alunoAtualizado) {
        alunoAtualizado.setId(id);
        return alunoRepository.save(alunoAtualizado);
    }
}

