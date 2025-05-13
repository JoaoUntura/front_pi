document.addEventListener('DOMContentLoaded', () => {
    // Menu Temático
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // Validação de Formulário de Cadastro de Cliente
    const clienteForm = document.querySelector('#form-cliente');
    if (clienteForm) {
        clienteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const telefone = document.querySelector('#telefone').value;
            const telefoneRegex = /^\(\d{2}\) \d{4}-\d{4}$/;
            const feedback = document.querySelector('#feedback');

            if (!telefoneRegex.test(telefone)) {
                feedback.textContent = 'Telefone deve estar no formato (XX) XXXX-XXXX';
                feedback.style.color = '#D32F2F';
                return;
            }

            feedback.textContent = 'Cliente cadastrado com sucesso!';
            feedback.style.color = '#2E7D32';
            clienteForm.reset();
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

            if (senha.length < 6) {
                feedback.textContent = 'A senha deve ter pelo menos 6 caracteres';
                feedback.style.color = '#D32F2F';
                return;
            }

            feedback.textContent = 'Funcionário cadastrado com sucesso!';
            feedback.style.color = '#2E7D32';
            funcionarioForm.reset();
        });
    }

    // Validação de Formulário de Login de Usuário
    const usuarioForm = document.querySelector('#login-usuario-form');
    if (usuarioForm) {
        usuarioForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const telefone = document.querySelector('#telefone').value;
            const senha = document.querySelector('#senha').value;
            const telefoneRegex = /^\(\d{2}\) \d{4}-\d{4}$/;
            const feedback = document.querySelector('#feedback');

            if (!telefoneRegex.test(telefone)) {
                feedback.textContent = 'Telefone deve estar no formato (XX) XXXX-XXXX';
                feedback.style.color = '#D32F2F';
                return;
            }

            if (senha.length < 6) {
                feedback.textContent = 'A senha deve ter pelo menos 6 caracteres';
                feedback.style.color = '#D32F2F';
                return;
            }

            feedback.textContent = 'Login bem-sucedido!';
            feedback.style.color = '#2E7D32';
            usuarioForm.reset();
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

            if (usuario.length < 3) {
                feedback.textContent = 'O usuário deve ter pelo menos 3 caracteres';
                feedback.style.color = '#D32F2F';
                return;
            }

            if (senha.length < 6) {
                feedback.textContent = 'A senha deve ter pelo menos 6 caracteres';
                feedback.style.color = '#D32F2F';
                return;
            }

            feedback.textContent = 'Login bem-sucedido!';
            feedback.style.color = '#2E7D32';
            funcionarioLoginForm.reset();
        });
    }

    // Validação de Formulário de Recuperação de Senha (Usuário)
    const recuperarSenhaForm = document.querySelector('#recuperar-senha-form');
    if (recuperarSenhaForm) {
        const telefonesCadastrados = ['(11) 1234-5678', '(21) 9876-5432'];
        recuperarSenhaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const telefone = document.querySelector('#telefone').value;
            const telefoneRegex = /^\(\d{2}\) \d{4}-\d{4}$/;
            const feedback = document.querySelector('#feedback');

            if (!telefoneRegex.test(telefone)) {
                feedback.textContent = 'Telefone deve estar no formato (XX) XXXX-XXXX';
                feedback.style.color = '#D32F2F';
                return;
            }

            if (telefonesCadastrados.includes(telefone)) {
                feedback.textContent = 'Link enviado para o celular!';
                feedback.style.color = '#2E7D32';
                recuperarSenhaForm.reset();
            } else {
                feedback.textContent = 'Telefone não cadastrado ou digitado incorretamente';
                feedback.style.color = '#D32F2F';
            }
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

            if (usuario.length < 3) {
                feedback.textContent = 'O usuário deve ter pelo menos 3 caracteres';
                feedback.style.color = '#D32F2F';
                return;
            }

            if (usuariosCadastrados.includes(usuario)) {
                feedback.textContent = 'Link enviado para o e-mail!';
                feedback.style.color = '#2E7D32';
                recuperarSenhaFuncionarioForm.reset();
            } else {
                feedback.textContent = 'Usuário não cadastrado ou digitado incorretamente';
                feedback.style.color = '#D32F2F';
            }
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

            if (nome.length < 2) {
                feedback.textContent = 'O nome do produto deve ter pelo menos 2 caracteres';
                feedback.style.color = '#D32F2F';
                return;
            }

            if (preco <= 0) {
                feedback.textContent = 'O preço deve ser maior que zero';
                feedback.style.color = '#D32F2F';
                return;
            }

            feedback.textContent = 'Produto cadastrado com sucesso!';
            feedback.style.color = '#2E7D32';
            cadastroProdutoForm.reset();
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

            if (nome.length < 2) {
                feedback.textContent = 'O nome do produto deve ter pelo menos 2 caracteres';
                feedback.style.color = '#D32F2F';
                return;
            }

            if (preco <= 0) {
                feedback.textContent = 'O preço deve ser maior que zero';
                feedback.style.color = '#D32F2F';
                return;
            }

            feedback.textContent = 'Produto atualizado com sucesso!';
            feedback.style.color = '#2E7D32';
            editarProdutoForm.reset();
        });
    }

    // Simulação de Remoção de Produtos
    const produtosLista = document.querySelector('#produtos-lista');
    if (produtosLista) {
        const removerButtons = document.querySelectorAll('.remover-button');
        const feedback = document.querySelector('#feedback');

        removerButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const produtoItem = e.target.parentElement;
                produtoItem.remove();
                feedback.textContent = 'Produto removido com sucesso!';
                feedback.style.color = '#2E7D32';
            });
        });
    }

    // Simulação de Pedidos em Tempo Real
    const pedidosDiv = document.querySelector('#pedidos');
    if (pedidosDiv) {
        const pedidos = [
            { id: 1, produto: 'Pamonha', quantidade: 3, status: 'Pendente' },
            { id: 2, produto: 'Suco de Couve', quantidade: 2, status: 'Confirmado' }
        ];

        pedidos.forEach(pedido => {
            const pedidoElement = document.createElement('div');
            pedidoElement.textContent = `Pedido #${pedido.id}: ${pedido.produto} (x${pedido.quantidade}) - ${pedido.status}`;
            pedidosDiv.appendChild(pedidoElement);
        });
    }
});