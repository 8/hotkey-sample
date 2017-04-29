import { Component, OnDestroy } from '@angular/core';
import { Command, CommandService } from './command.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: 'main.component.html'
})
export class MainComponent implements OnDestroy {
  command: string = 'None';
  subscription: Subscription;
  constructor(private commandService: CommandService) {
    this.subscription = commandService.commands.subscribe(c => this.handleCommand(c));
  }
  handleCommand(command: Command) {
    switch (command.name) {
      case 'MainComponent.MoveLeft': this.command = 'left!'; break;
      case 'MainComponent.MoveRight': this.command = 'right!'; break;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
