// Captura de elementos do DOM
let produto = document.getElementById('produto');
let preco = document.querySelector('input[name=preco]');
const btnCadas = document.querySelector('input[type=submit]');
const msSucesso = document.getElementById('success');
let precoCadas = document.querySelector('.precoCdas')
let produtoCdas = document.querySelector('.produtoCdas');
let cadastrado = document.querySelector('.cadastrado')

// Arrys
let miniBanco = new Array;

// Funções
btnCadas.addEventListener('click',()=>{
    let produtoV = produto.value
    let precoV = preco.value
    
    
    if(produto.value !== '' && preco.value !== ''){

        miniBanco.push(
            {
                produto : produtoV,
                preco : precoV
            });
        
 

        cadastrado.innerHTML = "";
        miniBanco.map((cadastros)=>
        {  
            cadastrado.innerHTML +=`
            <div class="containerCadast">
            <h3 class="produtoCdas">`+cadastros.produto+`</h3>
            <h3 class="precoCdas">R$ `+cadastros.preco+`</h3>
            <input type="button" value="Deletar">
            </div>`
        })
        // Limpa o input e dá foco input produto

            produto.value = "";
            preco.value = "";
            produto.focus();
        
        // mensagem de sucesso para o usuário
        msSucesso.style.display='block';
        setTimeout(() => {
            msSucesso.style.display='none';
        }, 1000);


    }else{
        alert('Digite o produto e o valor para realizar o cadastro!')
    }

})


