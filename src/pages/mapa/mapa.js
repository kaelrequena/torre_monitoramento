import React,{useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiaW5lY3RhciIsImEiOiJjbHI3dXJ1OHAycDdlMmpxbTd5N2NzaXdwIn0.vR4LqoOYRrwLUmnhXFHo4Q';

function MapComponent() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-23.46500456906803, -46.53483821407553],
      zoom:15
    });
  
  new mapboxgl.Marker({
    color:"rgb(255,0,0)",

  })
  .setLngLat([-23.46500456906803, -46.53483821407553])
  .setPopup(
    new mapboxgl.Popup({ offset:35}) // Define um popup
      .setText('TESTE') // Texto do popup
  )
  .addTo(map);

    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }} />;
}

export default MapComponent;