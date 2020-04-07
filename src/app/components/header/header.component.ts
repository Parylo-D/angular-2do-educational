import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  dataList = ['Angular', 'TS', 'SCSS']

@Output() testOutput = new EventEmitter<string>();

constructor() { }

ngOnInit():void {
 }

 login():void{
   console.log('logIn');
   this.testOutput.emit('Header login works')
 }
 addItem(item: string): void{
   this.dataList.push(item);
 }
}
