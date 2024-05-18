import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]',
})
export class Dropdown {
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') showMenu() {
    this.isOpen = !this.isOpen;
  }
}
