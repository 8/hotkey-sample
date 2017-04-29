import { Component, OnDestroy } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';
  hotkeyCtrlLeft: Hotkey | Hotkey[];
  hotkeyCtrlRight: Hotkey | Hotkey[];

  constructor(private hotkeysService: HotkeysService) {
    this.hotkeyCtrlLeft = hotkeysService.add(new Hotkey('ctrl+left', this.ctrlLeftPressed));
    this.hotkeyCtrlRight = hotkeysService.add(new Hotkey('ctrl+right', this.ctrlRightPressed));
  }

  ctrlLeftPressed = (event: KeyboardEvent, combo: string): boolean => {
    this.title = 'ctrl+left pressed';
    return true;
  }

  ctrlRightPressed = (event: KeyboardEvent, combo: string): boolean => {
    this.title = 'ctrl+right pressed';
    return true;
  }

  ngOnDestroy() {
    this.hotkeysService.remove(this.hotkeyCtrlLeft);
    this.hotkeysService.remove(this.hotkeyCtrlRight);
  }
}
