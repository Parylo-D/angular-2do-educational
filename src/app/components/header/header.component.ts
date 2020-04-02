import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

// title = 'Angular 2Do!';
subName = 'Education!';
isLogined = false;
titleFontSize = "46px"

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.subName = '123 Edited';
    // }, 5000);
  }
login(event):void {
  this.isLogined = !this.isLogined;
 console.log('LogIn', event); 
}
}
// document.getElementById('id').addEventListener('click', () => {
//   console.log();
// });