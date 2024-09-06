function pesquisar() {
	// Obtém a seção onde os resultados da pesquisa serão exibidos
	let section = document.getElementById('resultados-pesquisa');

	let campoPesquisa = document.getElementById('campo-pesquisa').value;

	// se o campo pesquisa for uma string vazia...
	if (!campoPesquisa) {
		section.innerHTML = '<p>Nada foi encontrado. Sua busca não é uma linguagem</p>';
		return;
	}

	// Inicializa uma string vazia para armazenar os resultados formatados
	let resultados = '';
	let linguagem = '';
	let descricao = '';
	let tags = '';

	campoPesquisa = campoPesquisa.toLowerCase();
	// Itera sobre cada dado na lista de dados
	for (let dado of dados) {
		linguagem = dado.linguagem.toLowerCase();
		descricao = dado.descricao.toLowerCase();
		tags = dado.tags.toLowerCase();
		// se titulo includes campoPesquisa, então faça...
		if (
			linguagem.includes(campoPesquisa) ||
			descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)
		) {
			// Constrói o HTML para cada resultado, incluindo:
			// - Um div com a classe "tecnologia"
			// - Um título h2 com um link para mais informações
			// - Uma descrição da tecnologia
			// - Um link para mais informações sobre a tecnologia
			resultados += `
      <div class="tecnologia">
        <h2>
          <a href="#" target="_blank">${dado.linguagem}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">More information</a>
      </div>`;
		}

		if (!resultados) {
			resultados = "<p>Nada foi encontrado</p>"
		}
		// Atribui o HTML gerado à seção de resultados
		section.innerHTML = resultados;
	}
}
