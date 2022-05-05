import { Component, OnInit,Input } from '@angular/core';
import { Adelios } from '../models/adelios.model';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

  //@Input () appartements!: Adelios;

  ngOnInit() {
    console.log("prout")
    //console.log(this.appartements);
    console.log("prout")
    
  }
  
}
