import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements AfterViewInit {

  @ViewChild('progress')
  progress!: ElementRef<HTMLInputElement>;
  private counter = 0;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // console.log(this.progress);
    // console.dir(this.progress.nativeElement);
    // this.renderer.setStyle(this.progress.nativeElement, 'background', '#d515a0');
    setInterval(() => {

      if (this.counter == 65) {
         
      } else {
        this.counter += 1
        this.progress.nativeElement.innerText = this.counter + '%'
        // this.renderer.setValue(this.progress, this.counter + '%')
      }

    },30)
  }

}
