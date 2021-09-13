import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layoutsupermarket',
  templateUrl: './layoutsupermarket.component.html',
  styleUrls: ['./layoutsupermarket.component.css']
})
export class LayoutsupermarketComponent implements OnInit {

  title = 'The Corner Supermarket';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
//   btnRole= function () {
//     this.router.navigateByUrl('/role');
// };

}
