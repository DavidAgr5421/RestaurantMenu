import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { CommnetsComponent } from "./commnets/commnets.component";

@Component({
  selector: 'app-root',
  imports: [UserComponent, CommnetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurantmenu';
  city = "Medellin";
}
