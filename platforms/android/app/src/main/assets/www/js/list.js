$(document).ready( function(){
    let idKategori = localStorage.getItem('idKategori');

    $.ajax({
        url: urlservice + `kategorine/${idKategori}`,
        success : function(judul){
            $('#pageTitle').text(judul);
        }
    })

    $.getJSON( urlservice + `directoryList/${idKategori}` , function(datas){
        $(".list-unstyled div").remove();
        $.each(datas , function(i,data){
            $(".list-unstyled").append(`
            <li class="media" id="${data.idDirektori}">
                <!--img src="data:${data.imgType};base64, ${data.iconImg}" class="mr-3" alt="objek" style="width:80px;" /-->
                <img src="img/${idKategori}.png" style="width:60px; height: 60px; margin-right: 15px;" />
                <div class="media-body">
                <h4 class="mt-0 mb-1">${data.namaObjek}</h4>
                ${data.alamat}<br>${data.kecamatan}
                </div>
            </li>
            `);
        })
    } )

    $('.list-unstyled').on('click','.media',function(){
        
        let idDirektori = $(this).prop('id');
        // alert(idDirektori);
        localStorage.setItem('idDirektori',idDirektori);
        window.location.href='detil.html';
    })

    $('.top-head').on('click',function(){
        window.location.href='index.html';
    })
});
