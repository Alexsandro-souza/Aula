// Captura de elementos do DOM
let produto = document.getElementById('produto');
let preco = document.querySelector('input[name=preco]');
const btnCadas = document.querySelector('input[type=submit]');
const msSucesso = document.getElementById('success');
let precoCadas = document.querySelector('.precoCdas')
let produtoCdas = document.querySelector('.produtoCdas');
let cadastrado = document.querySelector('.cadastrado')
let total = document.getElementById('total');




// Arrys
let miniBanco = new Array;
produto.focus();


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
        let soma = 0;  
        
        miniBanco.map((cadastros)=>{
            soma = soma + parseFloat(cadastros.preco);
            cadastrado.innerHTML +=`
            <div class="containerCadast">
            <h3 class="produtoCdas">`+cadastros.produto+`</h3>
            <h3 class="precoCdas" > R$ `+cadastros.preco+`</h3>
            <input type="button" class="deletar" value="Deletar">
            </div>`
            total.innerText = `Total R$ ${soma}`;
        })
        

            // console.log(del)
        
            
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
        document.addEventListener('click',(e)=>{
            const elemento = e.target; //o target permite ver o elemento
            const elPai = elemento.parentNode; //essa proriedade mostra quem é o elemento pai

            if(elemento.classList.contains('deletar')){
                elPai.remove();
            }
            
        })
                
    

    // let del = document.getElementById('deletar')
    // console.log(del)




