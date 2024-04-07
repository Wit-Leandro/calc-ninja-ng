var opcoes = document.getElementById('op')
var res = document.getElementById('res')


opcoes.addEventListener('change', function(){
    var selecOpcao = opcoes.value

    if (selecOpcao === 'opcao1'){
        var abr = document.getElementById('calc_abs').style.display = 'block'
        var crt = document.getElementById('calc_crt').style.display = 'none' 
        var btnabs = document.getElementById('sendabs')
        btnabs.addEventListener('click', function(e){
            e.preventDefault()
            var atak = document.getElementById('atakinimigo').value    
            var minhadef = document.getElementById('minhadef').value   
            var pabs = document.getElementById('pabs').value         
            var r = atak - minhadef
            var tot = r * pabs / 100
            var ff = r - tot
            res.innerHTML = 'Nesta simulação você receberá '+ ff +' de dano'
            document.getElementById('atakinimigo').value = ''
            document.getElementById('minhadef').value = ''
            document.getElementById('pabs').value = ''
        })}

    else if (selecOpcao === 'opcao2'){
        var crt = document.getElementById('calc_crt').style.display = 'block'
        var abr = document.getElementById('calc_abs').style.display = 'none'
        var btncrt = document.getElementById('sendcrt')

        btncrt.addEventListener('click', function(e){
            e.preventDefault()
            var matak = document.getElementById('meuatak').value    
            var inimigodef = document.getElementById('inimigodef').value   
            var pcrt = document.getElementById('pcrt').value         
            var resu = matak - inimigodef
            var resul = inimigodef * pcrt / 100
            var tota = resu * pcrt / 100
            var final = resul + resu + tota
            res.innerHTML = 'Nesta simulação seu ataque será '+ final + 'de dano'
            document.getElementById('meuatak').value = ''
            document.getElementById('inimigo').value = ''
            document.getElementById('pcrt').value = ''
        })}

    else {
        var abr = document.getElementById('calc_abs').style.display = 'none'
        var crt = document.getElementById('calc_crt').style.display = 'none'
        res.innerHTML = 'Selecione . . .'
    }})




