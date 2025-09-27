import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  private backendUrl = 'http://localhost:8080';
  receivedData: string = '';

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
  loadData() {
    this.http.get(`${this.backendUrl}/read`, { responseType: 'text' })
      .subscribe({
        next: (data) => {
          console.log('Данные получены:', data);
          this.receivedData = data;
        },
        error: (error) => {
          console.error('Ошибка при загрузке:', error);
          alert('Ошибка при загрузке данных с сервера!');
        }
      });
  }
}