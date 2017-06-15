import { Component } from '@angular/core';
import { Restaurant } from './../model/restaurant.interface';
import { RestaurantService } from './../services/restaurant.service';
import PubSubService from './../services/pubsub.service';
import { Subject } from "rxjs/Subject";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';





@Component({
  selector: 'edit-restaurant-container',
  template: `
  <section [hidden]="backUp === null" class="editRestaurantContainer">
<form id="editForm" [formGroup]="editForm">
<input type="hidden" formControlName="id" >
<table class="editTable">
<tbody>
<tr>
<th>Name: </th>
<td>
<input type="text" formControlName="name" class="inputName" value="" >
</td>
<th>City: </th>
<td>
<input   type="text" formControlName="city" class="inputCity" value="">
</td>
</tr>
<tr><th>State: </th>
<td><input type="text" formControlName="state" class="inputState" value="" ></td>
<th>ZipCode:</th>
<td>
<input type="text" formControlName="zipCode" class="inputZipCode" value=""></td>
</tr>
<tr>
<th>Version:</th>
<td>
<select formControlName="version">
<option value="1">1</option>
<option selected="" value="2">2</option>
<option value="3">3</option>
</select>
</td>

</tr>
<tr>
<td><button (click)="cancelAction($event)"   class="warnButton">Cancel</button></td>
<td><button (click)="saveAction($event)" [class.inactive] = "!this.editForm.valid || this.equalToBackup()"   class="editButton">Save</button></td>
<td colspan='2'>
 
  <div *ngIf="!editForm.valid && !editForm.pristine">
  
<div *ngIf="!editForm.valid">
        <div class="red-color errorInfo" *ngIf="editForm.controls.name.errors && editForm.controls.name.errors.minlength">The name must be {{editForm.controls.name.errors.minlength.requiredLength}} chars long</div>
        <div class="red-color errorInfo" *ngIf="editForm.controls.city.errors && editForm.controls.city.errors.minlength">The city must be {{editForm.controls.city.errors.minlength.requiredLength}} chars long</div>
        <div class="red-color errorInfo" *ngIf="editForm.controls.state.errors && editForm.controls.state.errors.minlength">The state must be {{editForm.controls.state.errors.minlength.requiredLength}} chars long</div>
        <div class="red-color errorInfo" *ngIf="editForm.controls.zipCode.errors && editForm.controls.zipCode.errors.minlength">The zipCode must be {{editForm.controls.zipCode.errors.minlength.requiredLength}} chars long</div>

        <div class="red-color errorInfo" *ngIf="editForm.controls.name.errors && editForm.controls.name.errors.required">The name is required</div>
        <div class="red-color errorInfo" *ngIf="editForm.controls.city.errors && editForm.controls.city.errors.required">The city is required</div>
        <div class="red-color errorInfo" *ngIf="editForm.controls.state.errors && editForm.controls.state.errors.required">The state is required</div>
        <div class="red-color errorInfo" *ngIf="editForm.controls.zipCode.errors && editForm.controls.zipCode.errors.required">The zipCode is required</div>



</div>



  
  </div>
</td>
</tr>
</tbody>
</table>
</form>
</section>
 
  
  `
})
//http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/
export class EditRestaurantContainer {
  private deleteRestaurantSubscription: Subject<any>;
  private subscription: Subject<any>;
  private saveSubject: Subject<any>;
  private newSubject: Subject<any>;
  private backUp: Restaurant = null;
  private actionState: string = null;

  editForm: FormGroup;


  constructor(private restaurantService: RestaurantService,
    private sub: PubSubService, fb: FormBuilder) {
    console.log("in restaurant con")

    this.editForm = fb.group({
      city: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      state: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      zipCode: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      version: [1, Validators.required],
      id: [-1]




    })




    var channel = sub.getChannel();
    this.saveSubject
      = channel.subject("save." + sub.getRestaurantEditTopic());

    this.newSubject
      = channel.subject("new." + sub.getRestaurantEditTopic());
    //looking for add.update.* or edit.update.*
    this.subscription = channel.observe("#.update." + sub.getRestaurantEditTopic());
    this.deleteRestaurantSubscription = channel.observe("delete." + sub.getRestaurantEditTopic());


     this.deleteRestaurantSubscription
      .subscribe(
      (data) => {

          this.backUp = null;
          this.editForm.reset();

      },
      (error) => {
        console.log(JSON.stringify(error))
      },

    );



    this.subscription
      .subscribe(
      (data) => {
        console.log("restaurant edit got "+data)

        this.backUp = { ...data.selectedRestaurant };
        delete this.backUp.reviewDTOs;
        delete data.selectedRestaurant.reviewDTOs;
        this.editForm.reset();
        this.editForm.setValue(data.selectedRestaurant);
        if (data.selectedRestaurant.id < 0) {
          this.actionState = "ADD";
        }
        else {
          this.actionState = "EDIT";
        }

      },
      (error) => {
        console.log(JSON.stringify(error))
      },

    );

  }
 
  log() {
    // console.log(this.editForm.value);
    console.log(` errors ${JSON.stringify(this.editForm.controls.city.errors)} min  ${this.editForm.controls.city.errors.minlength}`)
  }

  formOkay() {
    return this.editForm.valid && !this.equalToBackup();
  }
  /**
   * return true if you are equal to the backup 
   * false if not
   */
  equalToBackup() {
    if (!this.backUp) {
      return true;
    }
    var akeys = Object.keys(this.backUp);
    var bkeys = Object.keys(this.editForm.value);
    var len = akeys.length;
    if (len != bkeys.length) return false;
    for (var i = 0; i < len; i++) {
      if (this.backUp[akeys[i]] !== this.editForm.value[akeys[i]]) return false;
    }
    return true;
  }




  saveAction(ev) {
    if (this.formOkay()) {
      var dataToSend = this.editForm.value;
      this.backUp = this.editForm.value;
      this.editForm.reset();
      this.editForm.setValue(this.backUp);
      if (this.actionState == "ADD") {
        this.newSubject.next(dataToSend)
      }
      else {
        this.saveSubject.next(dataToSend);
      }

    }
  }

  cancelAction() {
    this.editForm.reset();
    this.editForm.setValue(this.backUp);

  }

}
