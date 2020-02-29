$(document).ready( function(){
    let idBerita = localStorage.getItem('idBerita');
    let judul = localStorage.getItem('judul');
    $('#judule').text(judul);
    $('.artikel').html('');
    $.ajax({
        url : urlservice + `uraianBerita/${idBerita}`,
        success : function(berita){
            $('#artikel').html(berita);
        }
    })

    $.getJSON( urlservice + `detilBerita/` + idBerita , function(berita){
        $('.infob').html('');
        $('#perilis').text(berita.namaLembaga);
        let t = berita.tanggalTerbit.split('-');
        $('#tgTerbit').text(t[2]+'/'+t[1]+'/'+t[0]);

    })

    $('.top-head').on('click',function(){
        window.location.href='dir-berita.html';
    })
});
