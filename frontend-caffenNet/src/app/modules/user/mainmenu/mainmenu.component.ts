import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonButtons, IonButton, 
  IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle  } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { BottomBarComponent } from 'src/app/shared/components/bottom-bar/bottom-bar.component';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonButtons, IonButton, IonIcon, 
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, CommonModule, FormsModule, ProductCardComponent, BottomBarComponent]
})
export class MainmenuComponent {

  cafes = [
    {
      nombre: 'Espresso',
      imagen: 'https://www.marketresearchintellect.com/images/blogs/sipping-success-exploring-the-dynamics-of-the-espresso-coffee-market.webp',
      precio: 4659
    },
    {
      nombre: 'Cappuccino',
      imagen: 'https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/2022/Capuccino.jpg.jpeg?itok=J1pWPwe2',
      precio: 4659
    },
    {
      nombre: 'Frappés',
      imagen: 'https://www.coffeetech.com/media/img/products/secondary/Distribuidor-bebidas-verano-frias-frappe-caramelo-hosteler%C3%ADa.webp',
      precio: 4659
    },
    {
      nombre: 'Rociado con Caramelo',
      imagen: 'https://img.freepik.com/fotos-premium/cafe-helado-casero-rociado-caramelo_198067-5042.jpg',
      precio: 3938
    },
    {
      nombre: 'Nitro',
      imagen: 'https://assets3.thrillist.com/v1/image/2827042/792x601/scale;webp=auto;jpeg_quality=60;progressive.jpg',
      precio: 3938
    },
    {
      nombre: 'Canela y Cacao',
      imagen: 'https://noahhelps.org/wp-content/uploads/2020/12/Dark-Chocolate-Cinnamon-Coffee_Dec2020-1-700x525.jpg',
      precio: 4659
    },

   

  ];

  agregarAlCarrito(cafe: any) {
    console.log(`${cafe.nombre} agregado al carrito.`);
  }

}
