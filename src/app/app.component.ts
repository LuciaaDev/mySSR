import { afterNextRender, afterRender, Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly dataSvc = inject(DataService);
  product$ = this.dataSvc.getProduct();

  constructor() {
    console.log('This platformId is:', this.platformId);
    // Estos dos ifs es una forma casera de ejecutar afterNextRender y afterRender.
    // afterNextRender
    // if(isPlatformBrowser(this.platformId)) {
    //   localStorage.setItem('cart', 'dominicode');
    //   console.log("isPlatformBrowser:", this.platformId);
    // }

    // afterRender
    // if(isPlatformServer(this.platformId)) {
    //   console.log("isPlatformServer:", this.platformId);
    // }

    afterNextRender(() => {
      localStorage.setItem('cart', 'dominicode');
      console.log("isPlatformBrowser:", this.platformId);
    });

    afterRender(() => {
      // Con este método estamos 100% seguros de que nuestra aplicación/nuestros componentes se han renderizado.
      console.log("isPlatformServer:", this.platformId);
    });
  }
}
