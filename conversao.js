const botao = document.querySelector('#enviar');
botao.addEventListener('click', () => {
    const bytes = parseFloat(document.querySelector('#inputUnidade').value).toFixed(2);
    return transformaUnidades(bytes);
});

function transformaUnidades(bytes) {

    let kylobyte = (bytes/1024).toFixed(2);
    let megabyte = (kylobyte/1024).toFixed(2);
    let gigabyte = (megabyte/1024).toFixed(2);
    let terabyte = (gigabyte/1024).toFixed(2);
    let petabyte = (terabyte/1024).toFixed(2);
    let exabyte = (petabyte/1024).toFixed(2);
    let zettabyte =(exabyte/1024).toFixed(2);
    let yottabyte = (zettabyte/1024).toFixed(2);

    if(bytes >= 1 && bytes < 1024){
        alert(`Tamanho do Arquivo: ${bytes}B`);
    }else if(kylobyte >= 1 && kylobyte < 1024){
        alert(`Tamanho do Arquivo: ${kylobyte}KB`);
    }else if(megabyte >= 1 && megabyte < 1024){
        alert(`Tamanho do Arquivo: ${megabyte}MB`);
    }else if(gigabyte >= 1 && gigabyte < 1024){
        alert(`Tamanho do Arquivo: ${gigabyte}GB`);
    }else if(terabyte >= 1 && terabyte < 1024){
        alert(`Tamanho do Arquivo: ${terabyte}TB`);
    }else if(petabyte >= 1 && petabyte < 1024){
        alert(`Tamanho do Arquivo: ${petabyte}PB`)
    }else if(exabyte >= 1 && exabyte < 1024){
        alert(`Tamanho do Arquivo: ${exabyte}EB`)
    }else if(zettabyte >= 1 && zettabyte < 1024){
        alert(`Tamanho do Arquivo: ${zettabyte}ZB`)
    }else if(yottabyte >= 1){
        alert(`Tamanho do Arquivo: ${yottabyte}YB`)
    }
}