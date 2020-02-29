$(document).ready( function(){
    $.getJSON( urlservice + `daftarAgenda`, function(agendas){
        //console.log(agendas);
        $('#agendaList li').remove();
        $.each( agendas , function(i,data){
            $('#agendaList').append(`
            <li class="media" id="${data.idAgenda}">
                <img src="data:${data.imgType};base64, ${data.iconImg}" class="mr-3" alt="berita" style="width:80px;"/>
                <div class="media-body">
                <h4 class="mt-0 mb-1">${data.namaAgenda}</h4>
                ${data.lokasi}<br>${data.mulai} s.d ${data.selesai}
                </div>
            </li>
            `)
        })
    })

    $('#agendaList').on('click','li.media',function(){
        let ida = $(this).prop('id');
        localStorage.setItem('idAgenda',ida);
        window.location='agenda.html';
    })

    $('.top-head').on('click',function(){
        window.location.href='index.html';
      })
});
