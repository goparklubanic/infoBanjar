let menu = [
    {'nama':'Pendidikan','gambar':"yu-didik.png",'href':'sekolah.html'},
    {'nama':'Keamanan','gambar':"yu-aman.png",'href':'bak.html'},
    {'nama':'Kesehatan','gambar':"yu-waras.png",'href':'puskesmas.html'},
    {'nama':'Pemerintahan','gambar':"yu-prentah.png",'href':'gov.html'},
    {'nama':'Keuangan','gambar':"yu-duwit.png",'href':'bak.html'},
    {'nama':'Keagamaan','gambar':"yu-badah.png",'href':'bak.html'}
];

$( document ).ready( function(){
    $(".menu-holder div").remove();
    $.each(menu , function(i,data){
        $(".menu-holder").append(`
        <div class='menu-box'>
          <img src='./img/${data.gambar}' class='menu-image'>
          <div class='menu-title py-1'><a class='text-light' href='${data.href}'>${data.nama}</a></div>
        </div>
        `);
    })
})