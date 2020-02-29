let menu = [
    {'nama':'Serulingmas','gambar':"wisata-serulingmas.png"},
    {'nama':'Curug Pitoe','gambar':"wisata-curug7.png"},
    {'nama':'Candi Arjuna','gambar':"wisata-candi.png"},
    {'nama':'Kawah Sikidang','gambar':"wisata-kawah.png"},
    {'nama':'Serayu Rafting','gambar':"wisata-rafting.png"},
    {'nama':'Surya Yudha','gambar':"wisata-surya.png"}
];

$( document ).ready( function(){
    $(".menu-holder div").remove();
    $.each(menu , function(i,data){
        $(".menu-holder").append(`
        <div class='menu-box'>
          <img src='./img/${data.gambar}' class='menu-image'>
          <div class='menu-title'><p>${data.nama}</p></div>
        </div>
        `);
    })
})