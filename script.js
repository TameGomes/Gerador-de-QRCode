function GerarQRCode() {
    var textoUsuario = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=350x300&chl=';
    var conteudoQRCODE = GoogleChartAPI +  textoUsuario;
    document.querySelector('#QRCodeImage').src = conteudoQRCODE;
}

