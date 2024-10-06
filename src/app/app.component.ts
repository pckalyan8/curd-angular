import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { enviroinment } from '../enviroinment/enviroinment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curd-app';
  env = enviroinment.name
}
