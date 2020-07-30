import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  likesCount: number = 0;
  showLikes: boolean = true;

  newLike() { 
    this.likesCount++;
  }
  newDislike() { 
    this.likesCount--;
  }
  toggleShowLikes() { 
    this.showLikes = !this.showLikes; 
  }
}
