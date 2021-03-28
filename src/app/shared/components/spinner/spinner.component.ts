import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/core/data-service.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  public spinner = false;

  constructor(private dataSer: DataServiceService) {
    this.dataSer.subscribe("spinner", (value) => { this.spinner = value.payload });
  }

  ngOnInit() {
  }

  // setFlag = (res) =>{
  //   this.spinner = res
  // }

}
