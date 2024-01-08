import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation, SignInParams } from '../models';
@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute); // allow us to get data to current route
  houseService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  signIn: SignInParams | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.houseService.getHousingLocationById(housingLocationId);
  }

  submitApplication() {
    this.houseService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
