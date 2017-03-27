import { Component, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import './hamburger.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;

  projects = [
      { img: "../assets/images/snoozic.PNG", display: 'Current Project: Snoozic, working on web and mobile. <a target="_blank" href="https://mackenzieplowman.myportfolio.com/snoozic">More Info</a>'},
      { img: "../assets/images/cube.gif", display: '5 minute WebGL rubix cube tutorial: <a target="_blank" href="http://rubixwebgl.alissonbaril.com/">Tutorial</a>, <a target="_blank" href="https://github.com/alibaril/webgl">Github</a>'},
      { img: "../assets/images/sheep.png", display: "SheepShoo: Angular 2 web game to teach kids math, typing and binary"},
      { img: "../assets/images/project2.jpg", display: 'Raspberry pi projects I have worked on:<a target="_blank" href="http://www.pimusicbox.com/"> Music Box</a>, <a target="blank" href="http://drstrangelove.net/2013/12/raspberry-pi-power-cat-feeder-updates/">Automated Cat Feeder</a>, <a target="_blank" href="http://raspberrywebserver.com/">Server'}
  ]

  currProj = 0;

  current = this.projects[0];

  constructor() {
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 1, 10000);
      this.camera.position.z = 1000;

      const geometry = new THREE.BoxGeometry(400, 400, 400);
      const material = new THREE.MeshBasicMaterial({color: 0x1ec503, wireframe: true});
      this.mesh = new THREE.Mesh(geometry, material);

      this.scene.add(this.mesh);
  }

  ngAfterViewInit() {
      this.renderer.setSize(window.innerWidth, 400);
      this.renderer.domElement.style.display = "block";
      this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
      this.animate();
  }

  animate() {
      window.requestAnimationFrame(() => this.animate());
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
  }

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
