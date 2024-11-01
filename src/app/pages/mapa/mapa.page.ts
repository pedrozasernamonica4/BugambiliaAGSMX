import { Component, OnInit } from '@angular/core';

declare const google: any;  // Para poder acceder a Google Maps

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map: any;
  service: any;
  infowindow: any;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const location = new google.maps.LatLng(21.88234, -102.28259);  // Coordenadas de Aguascalientes
    const mapOptions = {
      center: location,
      zoom: 14
    };

    
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
    this.infowindow = new google.maps.InfoWindow();

    
    const request = {
      location: location,
      radius: '5000',  
      type: ['florist']  
    };

    this.service = new google.maps.places.PlacesService(this.map);

  
    this.service.nearbySearch(request, (results: any[], status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.createMarker(results[i]);  // Crea un marcador por cada florería encontrada
        }
      } else {
        console.error('Error al realizar la búsqueda:', status);
      }
    });
  }

  
  createMarker(place: any) {
    const marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });

    // Agrega un evento para mostrar el nombre de la florería cuando se hace clic en el marcador
    google.maps.event.addListener(marker, 'click', () => {
      this.infowindow.setContent(place.name);  // Muestra el nombre de la florería
      this.infowindow.open(this.map, marker);
    });
  }
}
