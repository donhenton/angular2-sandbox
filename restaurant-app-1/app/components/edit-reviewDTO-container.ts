import { Component } from '@angular/core';
import { Restaurant,ReviewDTOs } from './../model/restaurant.interface';
import { RestaurantService } from './../services/restaurant.service';
import PubSubService from './../services/pubsub.service';
import { Subject } from "rxjs/Subject";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'edit-restaurant-container',
  template: ``
})
 
export class EditReviewDTOContainer {
   
  private editForm: FormGroup;
  private backUp:ReviewDTOs;

  constructor(private restaurantService: RestaurantService,
    private sub: PubSubService, fb: FormBuilder) {

 


 


   

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
  reviewsEqualToBackup(backupItem,currentItem)
  {
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
