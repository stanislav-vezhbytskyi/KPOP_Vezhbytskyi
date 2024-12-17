import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Додано для *ngFor
import { FormsModule } from '@angular/forms'; // Додано для [(ngModel)]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Вкажіть, що це standalone-компонент
  imports: [CommonModule, FormsModule], // Додайте необхідні модулі
})
export class AppComponent {
  imagePath: string = ''; // Зберігає введений шлях
  imagePaths: string[] = []; // Масив для збереження шляхів до зображень

  addImage(): void {
    const isValidUrl = this.isValidUrl(this.imagePath);
    if (this.imagePath.trim() && isValidUrl) {
      this.imagePaths.push(this.imagePath.trim());
      this.imagePath = '';
    } else {
      alert('Invalid image path');
    }
  }

  isValidUrl(path: string): boolean {
    try {
      const parts = path.split('.');

      if (parts.length < 2) {
        return false;
      }

      const fileExtension = parts[parts.length - 1].toLowerCase();

      const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];

      return validExtensions.includes(fileExtension);
    } catch (e) {
      console.log(e);
      return false;
    }
  }

}
