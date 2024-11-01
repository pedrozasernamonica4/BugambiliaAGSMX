import { Component } from '@angular/core';

// Definir la interfaz Flower para tipar correctamente las flores
interface Flower {
  name: string;
  description: string;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  // Arreglo de flores con la información original
  flowers: Flower[] = [
    {
        name: 'Rosa',
        description: 'La rosa roja, símbolo del amor eterno, se despliega en suaves pétalos.',
        image: 'assets/Imagenes/rosa.jpg',
        quantity: 0,
      },
      {
        name: 'Tulipán',
        description: 'El tulipán amarillo brilla como un rayo de sol en primavera.',
        image: 'assets/Imagenes/tulipan.jpg',
        quantity: 0,
      },
      {
        name: 'Girasol',
        description: 'El girasol, con su rostro siempre buscando el sol, es un símbolo de felicidad y devoción.',
        image: 'assets/Imagenes/girasol.jpg',
        quantity: 0,
      },
      {
        name: 'Orquídea',
        description: 'La orquídea, un tesoro de la naturaleza, fascina con su diversidad y elegancia.',
        image: 'assets/Imagenes/orquidea.jpg',
        quantity: 0,
      },
      {
        name: 'Lirio',
        description: 'El lirio blanco, con su fragancia sutil, evoca paz y pureza.',
        image: 'assets/Imagenes/lirio.jpg',
        quantity: 0,
      },
      {
        name: 'Jazmín',
        description: 'El jazmín, con su perfume dulce, transforma las noches de verano.',
        image: 'assets/Imagenes/jazmin.jpg',
        quantity: 0,
      },
      {
        name: 'Clavel',
        description: 'Los claveles son una flor que simboliza la pasión, el afecto y el romance.',
        image: 'assets/Imagenes/clave.jpg',
        quantity: 0,
      },
      {
        name: 'Violeta',
        description: 'La violeta, pequeña y encantadora, brilla con su color púrpura suave.',
        image: 'assets/Imagenes/violeta.jpg',
        quantity: 0,
      },
      {
        name: 'Magnolia',
        description: 'La magnolia, con su aroma fresco, es un símbolo de dignidad y nobleza.',
        image: 'assets/Imagenes/magnolia.jpg',
        quantity: 0,
      },
      {
        name: 'Dalia',
        description: 'La dalia, vibrante y llena de vida, trae energía y frescura.',
        image: 'assets/Imagenes/dalia.jpg',
        quantity: 0,
      },
      {
        name: 'Narciso',
        description: 'El narciso es la flor que marca el renacimiento de la primavera.',
        image: 'assets/Imagenes/narciso.jpg',
        quantity: 0,
      },
      {
        name: 'Peonía',
        description: 'La peonía, con sus exuberantes pétalos, simboliza la prosperidad y el romance.',
        image: 'assets/Imagenes/peonia.jpg',
        quantity: 0,
      },
      {
        name: 'Hortensia',
        description: 'La hortensia, con sus delicadas flores en racimo, transmite gratitud y abundancia.',
        image: 'assets/Imagenes/hortencia.jpg',
        quantity: 0,
      },
      {
        name: 'Amapola',
        description: 'La amapola, una flor silvestre con una belleza delicada, es símbolo de tranquilidad.',
        image: 'assets/Imagenes/amapola.jpg',
        quantity: 0,
      },
      {
        name: 'Geranio',
        description: 'El geranio, alegre y colorido, trae vitalidad y frescura a cualquier espacio.',
        image: 'assets/Imagenes/geranio.jpg',
        quantity: 0,
      },
      {
        name: 'Crisantemo',
        description: 'El crisantemo, símbolo de la longevidad, florece con esplendor en el otoño.',
        image: 'assets/Imagenes/crisantemo.jpg',
        quantity: 0,
      },
      {
        name: 'Lavanda',
        description: 'La lavanda, conocida por su fragancia relajante, es un símbolo de serenidad.',
        image: 'assets/Imagenes/lavanda.jpg',
        quantity: 0,
      },
      {
        name: 'Fresia',
        description: 'La fresia, delicada y perfumada, es un símbolo de amistad y confianza.',
        image: 'assets/Imagenes/fresia.jpg',
        quantity: 0,
      },
      {
        name: 'Alhelí',
        description: 'El alhelí, una flor de pétalos tiernos y colores brillantes, evoca sentimientos de amor y devoción.',
        image: 'assets/Imagenes/alheli.jpg',
        quantity: 0,
      },
      {
        name: 'Azucena',
        description: 'La azucena, una flor elegante y fragante, simboliza la pureza y la nobleza.',
        image: 'assets/Imagenes/azucena.jpg',
        quantity: 0,
      },
      {
        name: 'Cala',
        description: 'La cala, con su forma distintiva y belleza sutil, representa la gracia y la feminidad.',
        image: 'assets/Imagenes/cala.jpg',
        quantity: 0,
      },
    // Aquí puedes continuar agregando el resto de las flores
  ];

  constructor() {}

  // Método para aumentar la cantidad de una flor
  increaseQuantity(flower: Flower) {
    flower.quantity++;
  }

  // Método para disminuir la cantidad de una flor (sin permitir cantidades negativas)
  decreaseQuantity(flower: Flower) {
    if (flower.quantity > 0) {
      flower.quantity--;
    }
  }

  // Método para añadir una flor al carrito
  addToCart(flower: Flower) {
    console.log(`${flower.name} añadido al carrito.`);
    // Aquí puedes agregar la lógica para manejar el carrito
  }
}
