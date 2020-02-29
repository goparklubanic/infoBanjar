$( document ).ready( function(){
    $.getJSON( urlservice + `jenjangSekolah`, function(jenjang){
        $('#jenjang option').remove();
        $('#jenjang').append(`
            <option value=''>Pilih Jenjang</option>
            <option value='SD'>SD</option>
        `);
        $.each( jenjang , function(i, data){
            $('#jenjang').append(`
            <option value='${data.jenjang}'>${data.jenjang}</option>
            `)
        });
    })

    $('#jenjang').change(function(){
        $('#sekolah li').remove();
        let jenjang = $(this).val();
        if( jenjang == 'SD'){
            getSD();
         }else{
             $.getJSON( urlservice + `sekolah/${jenjang}` , function(sekolah){
                $.each( sekolah, function(i,data){
                    $('#sekolah').append(`
                    <li class='list-group-item'>
                    ${data.nama}<br>${data.kecamatan}<br>${data.alamat}
                    </li>
                    `)
                })
            })         
         }
    })
})

function getSD(){
    $.getJSON('https://sarpras.dindikpora.banjarnegarakab.go.id/sd/datasources/Sekolah/sekolahTampil',function(sd){
        $.each( sd, function(i,data){
            $('#sekolah').append(`
            <li class='list-group-item'>
            ${data.nama}<br>${data.kecamatan}<br>${data.alamat}
            </li>
            `)
        })
    })
}