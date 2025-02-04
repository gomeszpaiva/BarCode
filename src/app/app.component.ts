import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarcodeComponent } from './barcode/barcode.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarcodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-codigo-barras';
}
