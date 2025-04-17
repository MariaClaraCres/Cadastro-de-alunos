package com.example.cadastroalunos.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "alunos")
public class Aluno {

    @Id
    private String id;
    private String nome;
    private String endereco;
    private String email;
    private String telefone;
}
