const autores = require('./model_/autores');
const livros = require('./model_/livros');

async function run() {
  // Exemplo de uso dos métodos CRUD
  try {
    // Listar todos os autores
    const allAutores = await autores.getAll();
    console.log('Todos os autores:', allAutores);

    // Criar um novo autor
    const newAutor = { nome: 'Carolina Severo', nacionalidade: 'Brasileira' };
    const createdAutor = await autores.create(newAutor);
    console.log('Autor criado:', createdAutor);

    // Atualizar um autor existente
    const updatedAutor = { nome: 'Carolina Severo', nacionalidade: 'Brasileira' };
    const obrasToUpdate = 1;
    const result = await autores.update(obrasToUpdate, updatedAutor);
    console.log('Autor atualizado:', result);

    // Deletar um autor
    const obrasToDelete = 2;
    const deleteResult = await autores.delete(obrasToDelete);
    console.log('Autor deletado:', deleteResult);

    // Listar todos os livros
    const allLivros = await livros.getAll();
    console.log('Todos os livros:', allLivros);
  } catch (error) {
    console.error('Erro:', error);
  }
}

run();