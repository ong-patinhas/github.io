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