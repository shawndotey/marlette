import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'like-button',
    template: `
        <button>
          <span [ngClass]="{liked: isUserLiked}" class="like-button" (click)="selectLikeButton()">Like | <span class="likes-counter">{{totalLikes}}</span></span>
        </button>
    `,
    styles: [`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;

        }

        .liked {
            font-weight: bold;
            color: #1565c0;
        }
    `]
})
export class LikeButtonComponentComponent implements OnInit {
  totalLikes: number;
  isUserLiked: boolean;
  constructor() { }

  ngOnInit() {
    this.totalLikes = 100;
    this.isUserLiked = false;
  }

  selectLikeButton(){
    this.isUserLiked = !this.isUserLiked;
    if(this.isUserLiked){
      this.totalLikes = this.totalLikes +1;
    }
    else{
      this.totalLikes = this.totalLikes -1;
    }
    
  }
}
