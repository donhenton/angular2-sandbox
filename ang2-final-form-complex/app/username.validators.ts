import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

export class UsernameValidators{

    static shouldBeUniqueAsync(control: FormControl)
    {
        /////
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (control.value =="bonzo")
                {
                    resolve({shouldBeUnique: true})
                }
                else
                {
                    resolve(null);
                }
            },500)
        })
    }


    static cannotContainSpace(control: FormControl)
    {
        if (control.value.indexOf(' ') > 0)
        {
            return {hasSpaces: true}
        }
        return null; //return null if you are valid

    }



}