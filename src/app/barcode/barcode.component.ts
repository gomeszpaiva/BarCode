import { Component, ViewChild, ElementRef } from '@angular/core';
import JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent {
  generatedCode: string = '';

  @ViewChild('barcode') barcodeElement!: ElementRef;

  generateRandomCode(): string { 
    return Math.floor(100000000000 + Math.random() * 900000000000).toString();
  }

  generateBarcode(): void {
    this.generatedCode = this.generateRandomCode();

    JsBarcode(this.barcodeElement.nativeElement, this.generatedCode, {
      format: 'CODE128',
      lineColor: '#000',
      width: 2,
      height: 50,
      displayValue: true
    });
  }
}
