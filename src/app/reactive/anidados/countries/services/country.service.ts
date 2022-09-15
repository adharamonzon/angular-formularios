import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesReduce, Country } from '../interfaces/interfaces';
import { combineLatest, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _regions : string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
  private _baseUrl : string = 'https://restcountries.com/v2/'
  private fields: string = 'name,alpha3Code'

  get regions() : string[] {
    return[...this._regions]
  }
  constructor(private http : HttpClient) { }

  getCountriesByRegion(region: string): Observable<CountriesReduce[]> {
    return this.http.get<CountriesReduce[]>(`${this._baseUrl}/region/${region}?fields=${this.fields}`)
  }

  getCountryByCode(code : string): Observable<Country | null>{
    if (!code){
      return of(null) 
    }
    return this.http.get<Country>(`${this._baseUrl}/alpha?codes=${code}`)
  }

  getCountryByCodeReduce(code : string): Observable<CountriesReduce>{
    return this.http.get<CountriesReduce>(`${this._baseUrl}/alpha?codes=${code}?fields=${this.fields}`)
  }

  getCountriesByCode (borders: string[]): Observable<CountriesReduce[]> {
    if (!borders){
      return of([]);
    }
    
    const requestS : Observable<CountriesReduce>[] = [];
    borders.forEach(code => {
      const request = this.getCountryByCodeReduce(code)
      requestS.push(request)
    })
    return combineLatest(requestS); 
  }

} 
