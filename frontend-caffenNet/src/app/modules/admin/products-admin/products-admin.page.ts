import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto } from 'src/app/common/interfaces/producto';
import { ProductoService } from 'src/app/common/services/producto.service';
import { IonicModule } from '@ionic/angular';
import { ApiResponseDto } from 'src/app/common/interfaces/api-response-dto';
import { HttpClientModule } from '@angular/common/http';
import { BottomBarComponent } from "../../../shared/components/bottom-bar/bottom-bar.component";

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.page.html',
  styleUrls: ['./products-admin.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, BottomBarComponent]
})
export class ProductsAdminPage implements OnInit {
  productos: Producto[] = [];
  nuevoProducto: Producto = {
    id: undefined,
    nombre: '',
    descripcion: '',
    estado: 'Activo',
    status: true,
    precio: 0,
    stock: 0
  };

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getAll().subscribe((res: ApiResponseDto<Producto[]>) => {
      if (res.data && res.data.length > 0) {
        // Filtrar productos eliminados lógicamente
        this.productos = res.data.filter(producto => producto.status === true);
        console.log('Productos recargados:', this.productos); // Verificar productos cargados
      } else {
        console.log('No hay productos disponibles');
      }
    });
  }
  
  
  guardarProducto() {
    if (this.nuevoProducto.nombre && this.nuevoProducto.precio > 0 && this.nuevoProducto.stock >= 0) {
      // Asegurarse de que el producto está activo al guardarlo
      this.nuevoProducto.status = true; // Producto nuevo será activo por defecto
  
      this.productoService.save(this.nuevoProducto).subscribe(
        () => {
          this.nuevoProducto = { id: undefined, nombre: '', descripcion: '', estado: 'Disponible', status: true, precio: 0, stock: 0 };
          this.cargarProductos(); // Recargar productos después de guardar
        },
        (error) => {
          console.error('Error al guardar producto', error);
        }
      );
    } else {
      console.error('Por favor complete todos los campos correctamente.');
    }
  }
  eliminarProducto(id: number | undefined) {
    if (id !== undefined) {
      // Buscar el producto que vamos a eliminar lógicamente
      const productoEliminar = this.productos.find(producto => producto.id === id);
      
      if (productoEliminar) {
        // Marcar como eliminado lógicamente (cambiar status a false)
        productoEliminar.status = false;
  
        // Llamar al servicio para eliminar el producto en el backend
        this.productoService.delete(id).subscribe(
          (res) => {
            console.log(`Producto con id ${id} eliminado lógicamente`, res);
            
            // Actualizamos la lista local de productos
            this.productos = this.productos.filter(producto => producto.id !== id);
            
            // Opcional: Si quieres recargar los productos después de la "eliminación" lógica, puedes hacerlo aquí
            // this.cargarProductos();
          },
          (error) => {
            console.error('Error al eliminar producto', error);
          }
        );
      } else {
        console.error('Producto no encontrado');
      }
    } else {
      console.error('El id del producto es indefinido.');
    }
  }
  
  
}
