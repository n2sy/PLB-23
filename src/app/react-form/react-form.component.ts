import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css'],
})
export class ReactFormComponent {
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('nidhal', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      // infos : new FormGroup({
      //   nom : new FormControl(),
      //   prenom : new FormControl()
      // })
      skills: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  get FormsSkills() {
    return <FormArray>this.signupForm.get('skills');
  }

  addSkill() {
    const ctrl = new FormControl(null, Validators.required);
    this.FormsSkills.push(ctrl);
  }
}
