import { Component } from '@angular/core';
import { Restaurant, ReviewDTOs } from './../model/restaurant.interface';
import { RestaurantService } from './../services/restaurant.service';
import PubSubService,{PubSubSystem} from './../services/pubsub.service';
import { Subject } from "rxjs/Subject";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'edit-reviewDTO-container',
  template: `
    <section [hidden]="backUp === null" className="editReviewContainer">
    get a review job
    </section>
  
  `
})

export class EditReviewDTOContainer {

  private editForm: FormGroup;
  private junkSubject: Subject<any>;
  private backUp: Restaurant = null;
  private subscription: Subject<any>;
  private sub:PubSubSystem;

  constructor(private restaurantService: RestaurantService,
    subProvider: PubSubService, fb: FormBuilder) {

    this.sub = subProvider.getService();  
    console.log("calling observe in dto edit")
    var channel = this.sub.getChannel();
    this.subscription = channel.observe("*.update." + this.sub.getRestaurantEditTopic());
    console.log("got in dto container")
    this.junkSubject = channel.observe("junk.*");


    this.junkSubject
      .subscribe(
      (data) => {

        console.log("got junk in DTO")

      },
      (error) => {
        console.log(JSON.stringify(error))
      },

    );




    this.subscription
      .subscribe(
      (data) => {
        console.log("reviews got " + data)
        this.backUp = { ...data.selectedRestaurant };

      },
      (error) => {
        console.log(JSON.stringify(error))
      },

    );





  }



  formOkay() {
    //return this.editForm.valid && !this.equalToBackup();
  }
  /**
   * return true if you are equal to the backup 
   * false if not
  
  equalToBackup() {
    if (!this.backUp) {
      return true;
    }
    var isEqual:boolean = true;
    this.backUp.forEach( b => {
        let formItems:ReviewDTOs[] = this.editForm.value();
        formItems.forEach(f => {
          isEqual = isEqual && this.reviewsEqualToBackup(b,f);
          if (!isEqual)
          {
            return false;
          }
        });
        
    });
    return isEqual;
  }
   */
  reviewsEqualToBackup(backupItem, currentItem) {
    var akeys = Object.keys(currentItem);
    var bkeys = Object.keys(backupItem);
    var len = akeys.length;
    if (len != bkeys.length) return false;
    for (var i = 0; i < len; i++) {
      if (backupItem[akeys[i]] !== currentItem[akeys[i]]) return false;
    }
    return true;
  }



}
