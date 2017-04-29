import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

class HotkeyConfig {
  [key: string]: string[];
}

class ConfigModel {
  hotkeys: HotkeyConfig;
}

export class Command {
  name: string;
  combo: string;
  ev: KeyboardEvent;
}

@Injectable()
export class CommandService {

  private subject: Subject<Command>;
  commands: Observable<Command>;

  constructor(private hotkeysService: HotkeysService,
              private http: Http) {
    this.subject = new Subject<Command>();
    this.commands = this.subject.asObservable();
    this.http.get('assets/config.json').toPromise()
      .then(r => r.json() as ConfigModel)
      .then(c => {
        for (const key in c.hotkeys) {
          const commands = c.hotkeys[key];
          hotkeysService.add(new Hotkey(key, (ev, combo) => this.hotkey(ev, combo, commands)));
        }
      });
  }

  hotkey(ev: KeyboardEvent, combo: string, commands: string[]): boolean {
    console.log('hotkey event', combo);
    commands.forEach(c => {
      const command = {
        name: c,
        ev: ev,
        combo: combo
      } as Command;
      this.subject.next(command);
    });
    return true;
  }
}
