import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charlie',
  templateUrl: './charlie.component.html',
  styleUrls: ['./charlie.component.css']
})
export class CharlieComponent implements OnInit {

  charliePics:string[]=[];

  constructor() {     
    this.charliePics[0] = '../../assets/images/charliePics/charlie8.gif'; 
    this.charliePics[1] = '../../assets/images/charliePics/charlie2.jpg';   
    this.charliePics[2] = '../../assets/images/charliePics/charlie3.jpg';    
    this.charliePics[3] = '../../assets/images/charliePics/charlie4.jpg';    
    this.charliePics[4] = '../../assets/images/charliePics/charlie5.jpg';    
    this.charliePics[5] = '../../assets/images/charliePics/charlie6.jpg';    
    this.charliePics[6] = '../../assets/images/charliePics/charlie7.jpg'; 
    this.charliePics[7] = '../../assets/images/charliePics/charlie1.jpg';      
  }

  ngOnInit() {
  }

}
