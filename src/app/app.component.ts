import { Component, OnDestroy } from '@angular/core';
import { CommandService, Command } from './command.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';
  subscription: Subscription;

  constructor(private commandService: CommandService) {
    this.subscription = commandService.commands.subscribe(this.handleCommand);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleCommand = (command: Command) => {
    switch (command.name) {
      case 'AppComponent.Back': this.title = 'back!'; break;
      case 'AppComponent.Forward': this.title = 'forward!'; break;
    }
  }
}
