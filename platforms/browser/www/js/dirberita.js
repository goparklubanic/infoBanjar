$(document).ready( function(){
    $.getJSON( urlservice + `arsipBerita`, function(berita){
        console.log(berita);
        $('#beritaList li').remove();
        $.each( berita , function(i,data){
            $('#beritaList').append(`
            <li class="media" id="${data.idBerita}">
                <img src="data:${data.imgType};base64, ${data.iconImg}" class="mr-3" alt="berita" style="width:80px;"/>
                <div class="media-body">
                <h4 class="mt-0 mb-1 judule">${data.judul}</h4>
                <p>Sumber Berita: ${data.perilis}</p>
                <p>Tanggal Terbit: ${data.terbit}
                </div>
            </li>
            `)
        })
    })

    $('#beritaList').on('click','li.media',function(){
        let idb = $(this).prop('id');
        let judul = $(this).children('div').children('h4').text();
        
        localStorage.setItem('idBerita',idb);
        localStorage.setItem('judul',judul);
        window.location='berita.html';
    })

    $('.top-head').on('click',function(){
        window.location.href='index.html';
      })
});
