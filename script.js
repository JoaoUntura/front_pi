document.addEventListener('DOMContentLoaded', () => {
    // Funções reutilizáveis para validação
    const validarTelefone = (telefone, feedback) => {
        const telefoneRegex = /^\(\d{2}\) \d{4}-\d{4}$/;
        if (!telefoneRegex.test(telefone)) {
            feedback.textContent = 'Telefone deve estar no formato (XX) XXXX-XXXX';
            feedback.classList.add('error');
            return false;
        }
        feedback.classList.remove('error');
        return true;
    };

    const validarSenha = (senha, feedback) => {
        if (senha.length < 6) {
            feedback.textContent = 'A senha deve ter pelo menos 6 caracteres';
            feedback.classList.add('error');
            return false;
        }
        feedback.classList.remove('error');
        return true;
    };

    const validarUsuario = (usuario, feedback) => {
        if (usuario.length < 3) {
            feedback.textContent = 'O usuário deve ter pelo menos 3 caracteres';
            feedback.classList.add('error');
            return false;
        }
        feedback.classList.remove('error');
        return true;
    };

    const validarNomeProduto = (nome, feedback) => {
        if (nome.length < 2) {
            feedback.textContent = 'O nome do produto deve ter pelo menos 2 caracteres';
            feedback.classList.add('error');
            return false;
        }
        feedback.classList.remove('error');
        return true;
    };

    const validarPreco = (preco, feedback) => {
        if (preco <= 0) {
            feedback.textContent = 'O preço deve ser maior que zero';
            feedback.classList.add('error');
            return false;
        }
        feedback.classList.remove('error');
        return true;
    };

    const validarQuantidade = (quantidade, feedback) => {
        if (quantidade <= 0 || !Number.isInteger(Number(quantidade))) {
            feedback.textContent = 'A quantidade deve ser um número inteiro positivo';
            feedback.classList.add('error');
            return false;
        }
        feedback.classList.remove('error');
        return true;
    };

    // Validação e Registro de Pedido
    const criarPedidoForm = document.querySelector('#criar-pedido-form');
    if (criarPedidoForm) {
        criarPedidoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const produto = document.querySelector('#produto').value;
            const quantidade = document.querySelector('#quantidade').value;
            const cliente = document.querySelector('#cliente').value;
            const pagamento = document.querySelector('input[name="pagamento"]:checked')?.value;
            const feedback = document.querySelector('#feedback');

            if (!produto) {
                feedback.textContent = 'Selecione um produto';
                feedback.classList.add('error');
                return;
            }
            if (!validarQuantidade(quantidade, feedback)) return;
            if (!cliente) {
                feedback.textContent = 'Selecione um cliente';
                feedback.classList.add('error');
                return;
            }
            if (!pagamento) {
                feedback.textContent = 'Selecione uma forma de pagamento';
                feedback.classList.add('error');
                return;
            }

            // Simulação de registro de pedido (sem backend por enquanto)
            const pedido = {
                id: Date.now(), // Simula um ID único baseado em timestamp
                produto,
                quantidade,
                cliente,
                pagamento,
                data: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
            };
            feedback.textContent = 'Pedido registrado com sucesso!';
            feedback.classList.remove('error');
            criarPedidoForm.reset();
            console.log('Pedido registrado:', pedido); // Para debugging, pode ser substituído por chamada ao backend
        });
    }

    // Redirecionamento para Histórico de Pedidos
    const historicoPedidosButton = document.querySelector('#historico-pedidos');
    if (historicoPedidosButton) {
        historicoPedidosButton.addEventListener('click', () => {
            window.location.href = 'historico_pedidos.html';
        });
    }

    // Redirecionamento para Gerenciamento de Clientes
    const gerenciarClientesButton = document.querySelector('#gerenciar-clientes');
    if (gerenciarClientesButton) {
        gerenciarClientesButton.addEventListener('click', () => {
            window.location.href = 'gerenciamento_clientes.html';
        });
    }

    // Redirecionamento para Gerenciamento de Produtos
    const gerenciarProdutosButton = document.querySelector('#gerenciar-produtos');
    if (gerenciarProdutosButton) {
        gerenciarProdutosButton.addEventListener('click', () => {
            window.location.href = 'gerenciamento_produtos.html';
        });
    }

    // Validação de Formulário de Cadastro de Cliente
    const clienteForm = document.querySelector('#form-cliente');
    if (clienteForm) {
        clienteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const telefone = document.querySelector('#telefone').value;
            const feedback = document.querySelector('#feedback');
            if (!validarTelefone(telefone, feedback)) return;
            feedback.textContent = 'Cliente cadastrado com sucesso!';
            clienteForm.reset();
        });
    }

    // Validação de Formulário de Cadastro de Produto
    const cadastroProdutoForm = document.querySelector('#cadastro-produto-form');
    if (cadastroProdutoForm) {
        cadastroProdutoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.querySelector('#nome').value;
            const preco = document.querySelector('#preco').value;
            const feedback = document.querySelector('#feedback');

            if (!validarNomeProduto(nome, feedback)) return;
            if (!validarPreco(preco, feedback)) return;
            feedback.textContent = 'Produto cadastrado com sucesso!';
            cadastroProdutoForm.reset();
        });
    }

    // Validação de Formulário de Cadastro de Funcionário
    const funcionarioForm = document.querySelector('#cadastro-funcionario-form');
    if (funcionarioForm) {
        funcionarioForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const senha = document.querySelector('#senha').value;
            const feedback = document.querySelector('#feedback') || document.createElement('div');
            feedback.id = 'feedback';
            funcionarioForm.appendChild(feedback);

            if (!validarSenha(senha, feedback)) return;
            feedback.textContent = 'Funcionário cadastrado com sucesso!';
            funcionarioForm.reset();
        });
    }

    // Validação de Formulário de Login de Funcionário
    const funcionarioLoginForm = document.querySelector('#login-funcionario-form');
    if (funcionarioLoginForm) {
        funcionarioLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usuario = document.querySelector('#usuario').value;
            const senha = document.querySelector('#senha').value;
            const feedback = document.querySelector('#feedback');

            if (!validarUsuario(usuario, feedback)) return;
            if (!validarSenha(senha, feedback)) return;
            feedback.textContent = 'Login bem-sucedido!';
            funcionarioLoginForm.reset();
        });
    }

    // Validação de Formulário de Recuperação de Senha (Funcionário)
    const recuperarSenhaFuncionarioForm = document.querySelector('#recuperar-senha-funcionario-form');
    if (recuperarSenhaFuncionarioForm) {
        const usuariosCadastrados = ['admin', 'funcionario1'];
        recuperarSenhaFuncionarioForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usuario = document.querySelector('#usuario').value;
            const feedback = document.querySelector('#feedback');

            if (!validarUsuario(usuario, feedback)) return;
            if (usuariosCadastrados.includes(usuario)) {
                feedback.textContent = 'Link enviado para o e-mail!';
                feedback.classList.remove('error');
                recuperarSenhaFuncionarioForm.reset();
            } else {
                feedback.textContent = 'Usuário não cadastrado ou digitado incorretamente';
                feedback.classList.add('error');
            }
        });
    }

    // Validação de Formulário de Edição de Produto
    const editarProdutoForm = document.querySelector('#editar-produto-form');
    if (editarProdutoForm) {
        editarProdutoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.querySelector('#nome').value;
            const preco = document.querySelector('#preco').value;
            const feedback = document.querySelector('#feedback');

            if (!validarNomeProduto(nome, feedback)) return;
            if (!validarPreco(preco, feedback)) return;
            feedback.textContent = 'Produto atualizado com sucesso!';
            editarProdutoForm.reset();
        });
    }

    // Simulação de Remoção de Produtos (para páginas como pedidos)
    const produtosLista = document.querySelector('#produtos-lista');
    if (produtosLista) {
        const removerButtons = document.querySelectorAll('.remover-button');
        const feedback = document.querySelector('#feedback');

        removerButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const produtoItem = e.target.parentElement;
                produtoItem.remove();
                feedback.textContent = 'Produto removido com sucesso!';
                feedback.classList.remove('error');
            });
        });
    }

    // Gerenciamento de Produtos com Backend
    const produtosTabelaBody = document.querySelector('#produtos-tabela-body');
    const searchProdutoInput = document.querySelector('#search-produto');
    if (produtosTabelaBody) {
        // Função para carregar produtos do backend
        const carregarProdutos = async () => {
            try {
                const response = await fetch('/api/produtos');
                const produtos = await response.json();
                produtosTabelaBody.innerHTML = '';
                produtos.forEach(produto => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${produto.id}</td>
                        <td>${produto.nome}</td>
                        <td>
                            <button class="editar-button" data-id="${produto.id}">Editar</button>
                            <button class="remover-button" data-id="${produto.id}">Remover</button>
                        </td>
                    `;
                    produtosTabelaBody.appendChild(row);
                });
            } catch (error) {
                const feedback = document.querySelector('#feedback');
                feedback.textContent = 'Erro ao carregar produtos.';
                feedback.classList.add('error');
            }
        };

        // Carrega os produtos ao iniciar
        carregarProdutos();

        // Filtragem de Produtos
        if (searchProdutoInput) {
            searchProdutoInput.addEventListener('input', () => {
                const searchText = searchProdutoInput.value.toLowerCase();
                const rows = produtosTabelaBody.getElementsByTagName('tr');

                for (let row of rows) {
                    const id = row.cells[0].textContent.toLowerCase();
                    const nome = row.cells[1].textContent.toLowerCase();
                    if (id.includes(searchText) || nome.includes(searchText)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                }
            });
        }

        // Ações de Edição e Remoção
        produtosTabelaBody.addEventListener('click', async (e) => {
            const feedback = document.querySelector('#feedback');
            const id = e.target.dataset.id;

            if (e.target.classList.contains('remover-button')) {
                try {
                    const response = await fetch(`/api/produtos/remover/${id}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        feedback.textContent = 'Produto removido com sucesso!';
                        feedback.classList.remove('error');
                        carregarProdutos();
                    } else {
                        feedback.textContent = 'Erro ao remover produto.';
                        feedback.classList.add('error');
                    }
                } catch (error) {
                    feedback.textContent = 'Erro ao remover produto.';
                    feedback.classList.add('error');
                }
            }

            if (e.target.classList.contains('editar-button')) {
                try {
                    const response = await fetch(`/api/produtos/${id}`);
                    const produto = await response.json();
                    const nome = prompt('Novo nome do produto:', produto.nome);
                    const preco = prompt('Novo preço do produto:', produto.preco);

                    if (nome && preco) {
                        const updatedProduto = { id, nome, preco };
                        const updateResponse = await fetch(`/api/produtos/editar/${id}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(updatedProduto)
                        });

                        if (updateResponse.ok) {
                            feedback.textContent = 'Produto atualizado com sucesso!';
                            feedback.classList.remove('error');
                            carregarProdutos();
                        } else {
                            feedback.textContent = 'Erro ao atualizar produto.';
                            feedback.classList.add('error');
                        }
                    }
                } catch (error) {
                    feedback.textContent = 'Erro ao atualizar produto.';
                    feedback.classList.add('error');
                }
            }
        });
    }

    // Simulação de Remoção de Clientes
    const clientesTabelaBody = document.querySelector('#clientes-tabela tbody');
    if (clientesTabelaBody) {
        clientesTabelaBody.addEventListener('click', (e) => {
            if (e.target.classList.contains('remover-button')) {
                const clienteRow = e.target.closest('tr');
                clienteRow.remove();
                const feedback = document.querySelector('#feedback');
                feedback.textContent = 'Cliente removido com sucesso!';
                feedback.classList.remove('error');
            }
        });
    }

    // Simulação de Remoção de Pedidos
    const pedidosTabelaBody = document.querySelector('#pedidos-tabela tbody');
    if (pedidosTabelaBody) {
        pedidosTabelaBody.addEventListener('click', (e) => {
            if (e.target.classList.contains('remover-button')) {
                const pedidoRow = e.target.closest('tr');
                pedidoRow.remove();
                const feedback = document.querySelector('#feedback');
                feedback.textContent = 'Pedido removido com sucesso!';
                feedback.classList.remove('error');
            }
        });
    }
});