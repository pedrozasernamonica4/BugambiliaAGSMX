import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';   // Inicialización de email
  password: string = ''; // Inicialización de password

  constructor(private toastController: ToastController) {}

  async checkFields(form: NgForm) { // Especifica el tipo NgForm
    if (!form.valid) {
      const toast = await this.toastController.create({
        message: 'Por favor, completa todos los campos.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    } else {
      this.onLogin();
    }
  }

  onLogin() {
    // Lógica de inicio de sesión
    console.log('Inicio de sesión exitoso');
  }

  createPassword() {
    // Lógica para crear una nueva contraseña
    console.log('Creando contraseña');
  }

  resetPassword() {
    // Lógica para restablecer la contraseña
    console.log('Restableciendo contraseña');
  }

  deleteAccount() {
    // Lógica para eliminar la cuenta
    console.log('Eliminando cuenta');
  }
}
