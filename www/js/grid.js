$(document).ready( function(){
    let idKategori = localStorage.getItem('idKategori');
    $.ajax({
        url: urlservice + `kategorine/${idKategori}`,
        success : function(judul){
            $('#pageTitle').text(judul);
        }
    })
    
    $.getJSON( urlservice + `directoryList/${idKategori}` , function(datas){
        $(".menu-holder div").remove();
        $.each(datas , function(i,data){
            $(".menu-holder").append(`
            <div class='menu-box' id='${data.idDirektori}'>
              <img src="data:${data.imgType};base64, ${data.iconImg}" class="menu-image" alt="objek" />
              <div class='menu-title'><p>${data.namaObjek}</p></div>
            </div>
            `);
        })
    } )
});
