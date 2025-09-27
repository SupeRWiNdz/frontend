import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private backendUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  sendData(data: string) {
    if (!data) {
      alert('Введите текст!');
      return;
    }
    this.http.post(`${this.backendUrl}/save`, data, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          console.log('Успех:', response);
          alert('Данные отправлены!');
        },
        error: (error) => {
          console.error('Ошибка:', error);
          alert('Ошибка при отправке данных!');
        }
      });
  }
}
