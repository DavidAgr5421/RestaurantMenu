import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, MatIconModule, CommonModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {

  menuItems = signal<MenuItem[]>([
    {
      icon:"home",
      label:"Home",
      route: "Home",
    },
    {
      icon:"restaurant",
      label:"Menu",
      route: "Menu",
    },
    {
      icon:"wine_bar",
      label:"Drinks",
      route: "Drinks",
    },
    {
      icon:"brunch_dining",
      label:"Breakfast",
      route: "Breakfast",
    },
    {
      icon:"discount",
      label:"Promos",
      route: "Promos",
    },

  ]);

  sidenavCollapsed = signal(false);

  @Input() set collapsed(val: boolean){
    this.sidenavCollapsed.set(val);
  }

}
