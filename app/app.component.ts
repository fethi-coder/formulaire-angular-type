import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'formualireAngular';

  ngOnInit(): void {}

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(80),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(80),
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.minLength(3),
      Validators.maxLength(80),
    ]),
    mdp: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(80),
    ]),
    confirme: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(80),
    ]),
  });

  onSubmit() {
    if (
      !(
        this.form.value.mdp &&
        this.form.value.confirme &&
        this.form.value.mdp === this.form.value.confirme
      )
    ) {
      console.log({
        notEqual: {
          actual: this.form.value.mdp,
          expected: this.form.value.confirme,
        },  
      });
      alert('merci de renseigner tous les champs du formulaire')
    } else {
      alert('ton formulaire à bien était envoyé ' + this.form.value.name);
    }
  }

  errorAlertBox() {}
}
