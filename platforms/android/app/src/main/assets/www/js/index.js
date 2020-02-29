let menu = [
    {'nama':'Berita','gambar':"beranda-berita.png","link":"dir-berita.html"},
    {'nama':'Kalender Event','gambar':"beranda-agenda.png","link":"dir-agenda.html"}
];

let ikone = {
"Objek Wisata"      :"beranda-wisata.png",
"Tempat Belanja"    :"beranda-belanja.png",
"Sentra Kuliner"    :"beranda-kuliner.png",
"Hotel"             :"beranda-hotel.png",
"Homestay"          :"beranda-homestay.png"
}


$( document ).ready( function(){
    $("#menu-holder div").remove();
    $.each(menu , function(i,data){
        $("#menu-holder").append(`
        <div class='menu-box'>
          <img src='./img/${data.gambar}' class='menu-image'>
          <div class='menu-title' onClick = goto('${data.link}')><p>${data.nama}</p></div>
        </div>
        `);
    })

    $.getJSON(urlservice + 'beranda', function(kats){
        $.each(kats, function(i,data){
            $("#menu-holder").append(`
            <div class='menu-box'>
            <img src='./img/${ikone[data.namaKategori]}' class='menu-image'>
            <div class='menu-title' onClick=gokat(${data.idKategori})><p>${data.namaKategori}</p></div>
            </div>
            `);
        });

        $(".menu-holder").append(`
        <div class='menu-box'>
        <img src='./img/beranda-layananumum.png' class='menu-image'>
        <div class='menu-title' onClick=goto('dir-pubsvc.html')><p>Public Services</p></div>
        </div>
        `);
    })


})

function goto(link){
    window.location.href=link;
}
function gokat(kat){
    let page;
    //alert(kat+' , '+disp);
    // if( disp == 'grid'){ page='grid.html' }else{ page='list.html' }
    localStorage.setItem('idKategori',kat);
    window.location.href = 'list.html';
}