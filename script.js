var alpha = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z', ' '
]




function vrum (){
  var coud = prompt('Digite "c" para codificação ou "d" para decoficar.')


if (coud === 'd' || coud === 'D'){
var decodificando = ''  

var uhuuu = ''

var quasela = ''
  
var codg = prompt('Digite seu código')
  
var listcod = codg.split(' ')

  for (var cod of listcod){

  decodificando = (parseInt(cod)+13)/7
    
  
  quasela = alpha[decodificando]
  uhuuu = uhuuu+quasela
  document.getElementById('pergunta').textContent=uhuuu
}}
else{
  if (coud === 'c' || coud === 'C'){
     var original = prompt('Digite uma palavra:')

     var codificando = '';

     var codificado = '';

     for ( var index of original){
    
     codificando = (alpha.indexOf(index) *7)-13
    
    if (codificado === ''){
        codificado = codificando
    }
    else{
          codificado = codificado+' '+codificando
    }}
  document.getElementById('pergunta').textContent=codificado
     console.log(codificado) }
  else{
    var fim = "⚠️Por favor responda a primeira pergunta com 'C' ou 'D' "
    document.getElementById('pergunta').textContent=fim
  }
}}

