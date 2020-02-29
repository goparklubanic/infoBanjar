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
        setPeta(lonlat);
    })
});

function setPeta(lonlat){
    //alert( lonlat );
    mapboxgl.accessToken = 'pk.eyJ1IjoibnVncm9ob3JlZGJ1ZmYiLCJhIjoiY2ptNGJqbHV5MGwwZjNwa2NkY2VrNTV2dSJ9.GwtW5j2D5EjiAUXNOojy9A';
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            //center: [109.685770,-7.390559], // starting position [lng, lat]
            center: lonlat,
            zoom: 15, // starting zoom
            pitch: 60
        });
        
        map.on('load', function() {
            map.loadImage('./img/flag-icon.png',
            // map.loadImage('https://secure.webtoolhub.com/static/resources/icons/set101/ae5d1321.png',
            function(error, image) {
                if (error) throw error;
                map.addImage('flag', image);
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': [{
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': lonlat
                                }
                            }]
                        }
                    },
                    'layout': {
                        'icon-image': 'flag',
                        'icon-size': 0.15
                    }
                });
            });
        });
}