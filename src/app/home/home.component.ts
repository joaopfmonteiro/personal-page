import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  roles: string[] = [ "Back End Developer",
    "Front End Developer", "Full-Stack Developer", ""];
  currentRoleIndex: number = 0;

  @ViewChild('roleElement', { static: true }) roleElementRef!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeRole();
  }

  changeRole() {
    const roleElement = this.roleElementRef.nativeElement;

    roleElement.classList.add('fade-out');
    setTimeout(() => {
      roleElement.textContent = this.roles[this.currentRoleIndex];
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;

      roleElement.classList.remove('fade-out');
      if (this.currentRoleIndex < this.roles.length -1) {
        setTimeout(() => {
          this.changeRole();
        }, 2000);
      }
    }, 800);
  }
}
