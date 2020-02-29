let yuwaras = [
    {'no':'1','puskes':'SUSUKAN 1','alamat':'Desa Susukan Kecamatan Susukan 53475','telp':'0286-479271'},
{'no':'2','puskes':'SUSUKAN 2','alamat':'Desa Pekikiran Kecamatan Susukan 53475','telp':''},
{'no':'3','puskes':'PURWAREJA KLAMPOK 1','alamat':'Desa Klampok Kecamatan Purworejo Klampok  53474','telp':'0286-47926'},
{'no':'4','puskes':'PURWAREJA KLAMPOK 2','alamat':'Desa Sirkandi Kecamatan Purworejo Klampok  53474','telp':''},
{'no':'5','puskes':'MANDIRAJA 1','alamat':'Desa Mandiraja Kulon Kecamatan Mandiraja 53473','telp':'0286-411478'},
{'no':'6','puskes':'MANDIRAJA 2','alamat':'Desa Purwasaba Kecamatan Mandiraja 53473','telp':''},
{'no':'7','puskes':'PURWANEGARA 1','alamat':'Desa Kalipelus Kecamatan Purwanegara 53472','telp':''},
{'no':'8','puskes':'PURWANEGARA 2','alamat':'Desa Merden Kecamatan Purwanegara 53472','telp':'0286-411334'},
{'no':'9','puskes':'BAWANG 1','alamat':'Desa Mantrianom Kecamatan Bawang 53471','telp':'0286-579009'},
{'no':'10','puskes':'BAWANG 2','alamat':'Desa Wanadri Kecamatan Bawang 53471','telp':'8282901163'},
{'no':'11','puskes':'BANJARNEGARA 1','alamat':'Desa Karangtengah Kecamatan Banjarnegara  53470','telp':''},
{'no':'12','puskes':'BANJARNEGARA 2','alamat':'Desa Semarang Kecamatan Banjarnegara','telp':'0286-594575'},
{'no':'13','puskes':'PAGEDONGAN','alamat':'Desa Pagedongan Kecamatan Pagedongan','telp':''},
{'no':'14','puskes':'SIGALUH 1','alamat':'Desa Gembongan Kecamatan Sigaluh 53481','telp':'0286-5800138'},
{'no':'15','puskes':'SIGALUH 2','alamat':'Desa Bojanegara Kecamatan Sigaluh 53481','telp':''},
{'no':'16','puskes':'MADUKARA 1','alamat':'Desa Madukara Kecamatan Madukara 53482','telp':'(0286) 5986981'},
{'no':'17','puskes':'MADUKARA 2','alamat':'Desa Bantarwaru Kecamatan Madukara 53482','telp':'0286-5986664'},
{'no':'18','puskes':'BANJARMANGU 1','alamat':'Desa Kesenet Kecamatan Banjaramangu','telp':''},
{'no':'19','puskes':'BANJARMANGU 2','alamat':'Desa Kendaga Kecamatan Banjaramangu','telp':''},
{'no':'20','puskes':'WANADADI 1','alamat':'Desa Wanadadi Kecamatan Wanadadi 53461','telp':'(0286) 3398675'},
{'no':'21','puskes':'WANADADI 2','alamat':'Desa Linggasari Kecamatan Wanadadi 53461','telp':''},
{'no':'22','puskes':'PUNGGELAN 1','alamat':'Desa Punggelan Kecamatan Punggelan 53462','telp':''},
{'no':'23','puskes':'PUNGGELAN 2','alamat':'Desa Petuguran Kecamatan Punggelan 53462','telp':''},
{'no':'24','puskes':'RAKIT 1','alamat':'Desa Rakit Kecamatan Rakit 53463','telp':''},
{'no':'25','puskes':'RAKIT 2','alamat':'Desa Lengkong Kecamatan Rakit 53463','telp':''},
{'no':'26','puskes':'KARANGKOBAR','alamat':'Desa Karangkobar Kecamatan Karangkobar','telp':'0286-641189'},
{'no':'27','puskes':'PEJAWARAN','alamat':'Desa Penusupan Kecamatan Pejawaran 53454','telp':'(0286) 5800328'},
{'no':'28','puskes':'PAGENTAN 1','alamat':'Desa Pagentan Kecamatan Pagentan','telp':'0286-5800317'},
{'no':'29','puskes':'PAGENTAN 2','alamat':'Desa Aribaya Kecamatan Pagentan','telp':''},
{'no':'30','puskes':'BATUR 1','alamat':'Desa Sumberejo, Kecamatan Batur 53456','telp':''},
{'no':'31','puskes':'BATUR 2','alamat':'Desa Dieng Kulon Kecamatan Batur 53456','telp':'(0286) 3342072'},
{'no':'32','puskes':'WANAYASA 1','alamat':'Desa Wanayasa Kecamatan Wanayasa 53457','telp':'0286-641261'},
{'no':'33','puskes':'WANAYASA 2','alamat':'Desa Jatilawang Kecamatan Wanayasa 53457','telp':''},
{'no':'34','puskes':'KALIBENING','alamat':'Desa Kalibening Kecamatan Kalibening 53458','telp':'(0285) 522118'},
{'no':'35','puskes':'PANDANARUM','alamat':'Desa Pringamba Kecamatan Pandanarum 53458','telp':''}
];

$( document ).ready( function(){
    $("#subynum li").remove();
    $.each(yuwaras , function(i,data){
        $("#subyanum").append(`
        <li class="media">
            <img src="img/Puskesmas.png" class="mr-3" alt="berita" style="width:80px;">
            <div class="media-body">
            <h5 class="mt-0 mb-1">PUSKESMAS ${data.puskes}</h5>
            <p>${data.alamat}<br>${data.telp}</p>
            </div>
        </li>
        `);
    })
})