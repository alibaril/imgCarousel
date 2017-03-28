import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  projects = [
      { img: "../assets/images/image1.jpg"},
      { img: "../assets/images/image2.jpg"},
      { img: "../assets/images/image3.jpg"},
      { img: "../assets/images/image4.jpg"}
  ]

  currProj = 0;
  current = this.projects[0];

  next() {
      this.currProj++;

      if (this.currProj >= this.projects.length){
          this.currProj = 0
      }

      this.current = this.projects[this.currProj];
  }

  previous() {
      this.currProj--;

      if (this.currProj < 0){
          this.currProj = this.projects.length - 1;
      }

      this.current = this.projects[this.currProj]
  }

}
