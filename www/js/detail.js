let lonlat=[0,0];
let idDirektori = localStorage.getItem('idDirektori');
$(document).ready(function(){
    $.ajax({
        url : urlservice + `uraiDirektori/${idDirektori}`,
        success : function(desk){
            $('#desc').html(desk);
        }
    })

    $.getJSON(urlservice + `detilDirektori/${idDirektori}`, function(info){
        $('#judul').text(info.namaObjek);
        $('#namaObj').text(info.namaObjek);
        $('#alamat').text(info.alamat+', '+info.kecamatan);
        $('#telp').text(info.telepon);
        $('#website').text(info.website);
        $('#koordinat').text(info.geolokasi);
        let koor = info.geolokasi.split(',');
        lonlat = [koor[1],koor[0]];
    })
})