//const campoTeste = document.querySelector("#mascara");
const cpfTeste = document.querySelector("#teste");

const telefoneRedidencial = document.querySelector("#telResid");

const testeUF = document.querySelector("#testUf");

const testeCidade = document.querySelector("#testCid");

const testeNumeroPassaporte = document.querySelector("#numPass");

const testeCelular = document.querySelector("#testCel");

const testeCNH = document.querySelector("#testCnh");

const testeRG = document.querySelector("#testRG");

const testeTitulo = document.querySelector("#testTitulo");

const testeEmail = document.querySelector("#testEmail");

const testeNome = document.querySelector("#testNome");

const testeEndereco = document.querySelector("#testEndereco");

const testeProfissao = document.querySelector("#testProfissao");

const erroEmail = document.querySelector("#emailErro");

const erroMotivo = document.querySelector("#motivoErro");

const motivoSolicitacao = document.querySelector(".motivoSolicitacao");

let erro = false;


MaskJS(testeNome).mascararPalavras();

MaskJS(testeEndereco).mascararAlfanumerico();

MaskJS(testeCidade).mascararLetras();

MaskJS(testeProfissao).mascararLetras();

MaskJS(cpfTeste).mascararPadrao("999.999.999-99");

MaskJS(telefoneRedidencial).mascararPadrao("(99) 9999-9999");

MaskJS(testeUF).mascararPadrao("AA");

MaskJS(testeCidade).mascararPadrao("AA");

MaskJS(testeNumeroPassaporte).mascararPadrao("AA999999");

MaskJS(testeCelular).mascararPadrao("(99) 9-9999-9999");

MaskJS(testeCNH).mascararPadrao("99999999999");

MaskJS(testeRG).mascararPadrao("9999999999-9");

MaskJS(testTitulo).mascararPadrao("9999 9999 9999");

const verificarEmail = valor => {
    let padraoEmail = /[\w]{1,}[@]{1}[\w]{1}[.]{1}[\w]{1,}/gi;
    if(padraoEmail.test(valor)){
       erroEmail.innerText = " ";
    } else {
       erroEmail.innerText = "Formato incorreto!";
       erro = true;
    }
}

const verificarMotivo = valor =>{
	const padraoMotivo = ["Trabalho", "Turismo", "Estudo", "Sair"];
	if (padraoMotivo.indexOf(valor)) {
		erroMotivo.innerText = " ";
	}else {
		erroMotivo.innerText = "Motivo não existente!";
		erro = true;
	}
}

const Submeter = function(){
	erro = false;
	validarEmail(testeEmail.value);
	validarMotivo(motivoSolicitacao.value);
}

form.onsubmit = function(e){
	validarFormulario();
	if(erro) {
		e.preventDefault();
	}
}
