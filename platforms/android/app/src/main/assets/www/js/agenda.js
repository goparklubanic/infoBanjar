$(document).ready( function(){
    let idAgenda = localStorage.getItem('idAgenda');
    $.getJSON( urlservice + `detilAgenda/${idAgenda}`, function(agenda){
        console.log(agenda);
        $('.fz20').html('');
        $('#judul').html(agenda.namaAgenda);
        $('#namaAgenda').html(agenda.namaAgenda);
        $('#tanggal').html(agenda.tanggalMulai +' s.d '+ agenda.tanggalAkhir);
        $('#lokasi').html(agenda.lokasi);
        $('#deskripsi').html(agenda.deskripsi);
        $('#kontak').html(agenda.kontakPerson+" : "+agenda.kontakAddress);
    })

    $('.top-head').on('click',function(){
        window.location.href='dir-agenda.html';
    })
});
