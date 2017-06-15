import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vote',
  template: ` 
        <div class="vote-Component">
        <div class="up" 
        [class.active] = "myVote > 0"
        [class.no-pointer] = "myVote == 1"
        (click)="onClick(1,$event)" >&#9650;</div>
        <div>{{voteCount}}</div>
        <div class="up" 
        [class.active] = "myVote < 0"
        [class.no-pointer] = "myVote == -1"
        (click)="onClick(-1,$event)" >&#9660;</div>
        </div>
    `,
  styles: [
    `
    .vote-Component
    {
      text-align: center;
      width: 50px;
      border: thin solid black;
      font-size: 30px;
    }

    .active
    {
      color: orange;
    }

    .up,.down
    {
       cursor: pointer;
    }

    .no-pointer
    {
      cursor: default;
    }


`
  ]

})
export class VoteComponent {

  @Input() voteCount = 0;
  @Input() myVote = 0;
  doSubtract: boolean;
  @Output() myVoteChange = new EventEmitter();

  constructor() {
    this.doSubtract = false;
  }


  ngOnInit() {

    if (this.myVote === 0) {
      this.doSubtract = true;
    }

  }



  onClick(param, $event) {

    // console.log("click hit "+param+" "+$event.target)

    this.myVote = this.myVote + param;
    if (this.myVote < -1) {
      this.myVote = -1;
      this.doSubtract = false;

    }
    if (this.myVote > 1) {
      this.myVote = 1;
      this.doSubtract = false;
    }
    if (this.myVote === 0) {

      this.doSubtract = true;
    }

    if (this.doSubtract) {
      this.voteCount = this.voteCount + param;
      this.myVoteChange.emit({
        myVoteUpdate: this.myVote

      })
    }



  }





}
