
async function searchCep(){
    const busqcep = document.getElementById("cep");
   
   
    console.log(busqcep.value);
     if(busqcep.value.length !== 8){
     alert('Você digitou um CEP Invalido')
     return
    }
    
    if(busqcep.value == ""){
        alert("CEP vazio! Por favor, insira um CEP.");
        return
    }else{
        var infocep = await fetch(`https://viacep.com.br/ws/${busqcep.value}/json/`);
       infocep = await infocep.json();
       //  var dados = await infocep.json;
        console.log(infocep.localidade);
        console.log(infocep.estado);
        document.getElementById("rua").innerHTML = infocep.localidade
        document.getElementById("bairro").innerHTML = infocep.bairro
        document.getElementById("cidade").innerHTML = infocep.uf
        alert('CEP localizado com sucesso')
    }
    
   

    
        
}

async function resetCep() {
  const a =  confirm("Deseja limpar os dados do cep informado")
    if(a){
        document.getElementById("cep").value = ""

       document.getElementById("cidade").innerHTML = ""
       document.getElementById("rua").innerHTML = ""
        document.getElementById("bairro").innerHTML = ""
       alert("Dados do CEP limpado com sucesso!")
    }




    
}

