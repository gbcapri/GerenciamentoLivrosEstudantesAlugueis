# GerenciamentoLivrosEstudantesAlugueis
Desenvolver um sistema CRUD utilizando Express.js para gerenciar livros e estudantes, além de permitir o aluguel de livros por parte dos estudantes. O sistema deve ser capaz de realizar operações de criação, leitura, atualização e deleção (CRUD) para livros e estudantes, e gerenciar os aluguéis de livros.


Estrutura do Projeto

Tipo de Dado: Livro
id (número único)
título (string)
autor (string)
ano (número)
gênero (string)

Tipo de Dado: Estudante
id (número único)
nome (string)
matrícula (string)
curso (string)
ano (número)

Tipo de Dado: Aluguel
id (número único)
idLivro (número, referenciando um livro)
idEstudante (número, referenciando um estudante)
dataAluguel (string)
dataDevolucao (string, opcional)
