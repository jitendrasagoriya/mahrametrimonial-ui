import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-test',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }


  visible = false;

  ngOnInit() {
  }

  show() {
    console.log('show');
    if ( !this.visible) {
       document.getElementById('jitLoading').style.display = 'inline';
       this.visible = true;
    }
  }

  hide() {
    console.log('hide');
    if ( this.visible) {
        document.getElementById('jitLoading').style.display = 'none';
        this.visible = false;
    }
  }
}
