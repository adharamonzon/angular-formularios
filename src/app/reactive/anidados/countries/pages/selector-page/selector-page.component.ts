
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { CountriesReduce, Country } from '../../interfaces/interfaces';
import { count, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region  :  ['', Validators.required ],
    countries: ['', Validators.required ],
    borders:   ['', Validators.required ],
  })

  //llenar selectors
  regions :   string[] = [];
  countries : CountriesReduce[] = [];
  borders:    Country[] = [];
  loading: boolean = false;

  constructor( private fb : FormBuilder,
               private countryService : CountryService) { }

  ngOnInit(): void {
    this.regions = this.countryService.regions;
    //region change
    this.myForm.get('region')?.valueChanges
    .pipe(
      tap( (_) => {
        this.myForm.get('countries')?.reset('')
        this.loading = true;
      }),
      switchMap(region => this.countryService.getCountriesByRegion(region))
    )
    .subscribe(value => {
      this.countries = value
      this.loading = false
    })

    //country change
    this.myForm.get('countries')?.valueChanges
      .pipe(
        tap( (_) => {
          this.borders = [];
          this.myForm.get('borders')?.reset('');
          this.loading = true;
        }),
      )
        switchMap(code => this.countryService.getCountryByCode(code)),
        switchMap(country => this.countryService.getCountryByCode(country?.borders!))
        .subscribe(countries => {
          this.borders = countries;
          this.loading = false    
        }) 
    } 

  search() {
    console.log(this.myForm.value);
    
  }
}
