import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { TopNav } from '../top-nav/top-nav';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Sidebar, TopNav],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
