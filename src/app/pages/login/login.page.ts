import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    // Validaciones para asegurar que ambos campos estén llenos
    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const data = {
      email: this.email,
      password: this.password,
    };

    this.http.post<any>('http://localhost/mi_app_backend/login.php', data)
      .subscribe(response => {
        if (response.success) { // Cambia 'status' a 'success' según tu script de backend
          alert('Inicio de sesión exitoso');
          this.router.navigate(['/home']);
        } else {
          alert('Error al iniciar sesión: ' + response.message);
        }
      }, error => {
        alert('Error en la conexión: ' + error.message);
      });
  }
}
