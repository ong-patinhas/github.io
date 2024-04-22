    function toggleForm() {
        var tipoPagamento = document.getElementById('tipo_pagamento').value;
        var formPix = document.getElementById('form_pix');
        var formCartao = document.getElementById('form_cartao');
        var watermark = document.querySelector('.cat-img');

        if (tipoPagamento === 'pix') {
            formPix.classList.add('show');
            formCartao.classList.remove('show');
            watermark.style.display = 'none';
        } else if (tipoPagamento === 'cartao') {
            formPix.classList.remove('show');
            formCartao.classList.add('show');
            watermark.style.display = 'none';
        } else {
            formPix.classList.remove('show');
            formCartao.classList.remove('show');
            watermark.style.display = 'block';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('form_doacao');
        const tipoPagamento = document.getElementById('tipo_pagamento');
        const cartaoInput = document.getElementById('cartao');
        const cvvInput = document.getElementById('cvv');
        const expiracaoInput = document.getElementById('expiracao');
    
        // Mensagens de erro
        const tipoPagamentoError = document.getElementById('tipo_pagamento-error');
        const cartaoError = document.getElementById('cartao-error');
        const cvvError = document.getElementById('cvv-error');
        const expiracaoError = document.getElementById('expiracao-error');
    
        form.addEventListener('submit', function (event) {
            event.preventDefault();
    
            // Validação do campo Tipo de Pagamento
            if (tipoPagamento.value === 'selecione') {
                tipoPagamentoError.style.display = 'block';
                tipoPagamento.classList.add('error');
                return;
            } else {
                tipoPagamentoError.style.display = 'none';
                tipoPagamento.classList.remove('error');
            }
    
            // Validação dos campos para o tipo de pagamento cartão
            if (tipoPagamento.value === 'cartao') {
                // Validação do campo Número do Cartão
                if (cartaoInput.value.trim() === '' || !cartaoInput.checkValidity()) {
                    cartaoError.style.display = 'block';
                    cartaoInput.classList.add('error');
                    return;
                } else {
                    cartaoError.style.display = 'none';
                    cartaoInput.classList.remove('error');
                }
    
                // Validação do campo CVV
                if (cvvInput.value.trim() === '' || !cvvInput.checkValidity()) {
                    cvvError.style.display = 'block';
                    cvvInput.classList.add('error');
                    return;
                } else {
                    cvvError.style.display = 'none';
                    cvvInput.classList.remove('error');
                }
    
                // Validação do campo Data de Expiração
                if (expiracaoInput.value.trim() === '' || !expiracaoInput.checkValidity()) {
                    expiracaoError.style.display = 'block';
                    expiracaoInput.classList.add('error');
                    return;
                } else {
                    expiracaoError.style.display = 'none';
                    expiracaoInput.classList.remove('error');
                }
            }
    
            // Se todas as validações passarem, mostre a confirmação
            alert('Doação realizada com sucesso!');
            form.submit();
        });
    });
    