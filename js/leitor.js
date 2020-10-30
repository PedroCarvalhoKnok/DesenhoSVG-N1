const { Readable } = require('stream');

var namespace = 'http://www.w3.org/2000/svg';
var x1 = 0;
var x2 = 0;
var y1 = 0;
var y2 = 0;

var regra = {
    alf : [],
    reg : '',
    ang : ''
}


window.onload = function () {
            
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var fileSelected = document.getElementById('txtfiletoread');
        var linhas = '';
        var sep = [];
        var gramatica = [];
        fileSelected.addEventListener('change', function (e) {
           
            var fileExtension = /txt.*/;
            var fileTobeRead = fileSelected.files[0];
            if (fileTobeRead.type.match(fileExtension)) {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    var fileContents = document.getElementById('filecontents');
                    fileContents.innerText = fileReader.result;
                }
                fileReader.readAsText(fileTobeRead);
                const lerLinha = require('readline');
                const fs = require('fs');
                const leitura = fs.createReadStream(fileReader);

                const rl = readline.createInterface({
                    input: leitura,
                  //  output: process.stdout
                })

                rl.on('line', (line) =>{

                    while(line != null){

                        linhas += line;

                    }

                    gramatica.push(linhas.split('_'));

                    for(var gram of gramatica){

                        sep.push(gram.split('-'));

                        for(var s of sep){
                            regra.alf.push(s[1].trim());
                            regra.reg = s[3].trim();
                            regra.ang = s[5].trim().replace('°','');
    
                        }
                        
                    }

                
                })

            }
            else {
                alert("Por favor selecione arquivo texto");
            }

        }, false);
    }
    else {
        alert("Arquivo(s) não suportado(s)");
    }
}



function frente(){

    var element = document.createElementNS(namespace, line);
    y2 += 200;
     element.setAttributeNS(namespace, x1, x1.toString());
     element.setAttributeNS(namespace, y1, y1.toString());
     element.setAttributeNS(namespace, x2, x2.toString());
     element.setAttributeNS(namespace, y2, y2.toString());
    y1 = y2;

    
}

function frenteSemReta(){

    var element = document.createElementNS(namespace, line);
    y2 += 200;
     element.setAttributeNS(namespace, x1, x1.toString());
     element.setAttributeNS(namespace, y1, y1.toString());
     element.setAttributeNS(namespace, x2, x2.toString());
     element.setAttributeNS(namespace, y2, y2.toString());
     element.setAttributeNS("visibility", "hidden");
    y1 = y2;

    
}
function tras(){

    var element = document.createElementNS(namespace, line);
    y2 -= 200;
     element.setAttributeNS(namespace, x1, x1.toString());
     element.setAttributeNS(namespace, y1, y1.toString());
     element.setAttributeNS(namespace, x2, x2.toString());
     element.setAttributeNS(namespace, y2, y2.toString());
    y1 = y2;

    
}

function direita(angulo){

    var element = document.createElementNS(namespace, line);
    var rad = angulo * Math.PI/180;
    x2 += 200 * Math.cos(rad);
    y2 += 200 * Math.sin(rad);
     element.setAttributeNS(namespace, x1, x1.toString());
     element.setAttributeNS(namespace, y1, y1.toString());
     element.setAttributeNS(namespace, x2, x2.toString());
     element.setAttributeNS(namespace, y2, y2.toString());
     x1 = x2;
     y1 = y2;
    
}

function esquerda(angulo){

    var element = document.createElementNS(namespace, line);
    var rad = angulo * Math.PI/180;
    x2 -= 200 * Math.cos(rad);
    y2 -= 200 * Math.sin(rad);
     element.setAttributeNS(namespace, x1, x1.toString());
     element.setAttributeNS(namespace, y1, y1.toString());
     element.setAttributeNS(namespace, x2, x2.toString());
     element.setAttributeNS(namespace, y2, y2.toString());
    x1 = x2;
    y1 = y2;

    
}
