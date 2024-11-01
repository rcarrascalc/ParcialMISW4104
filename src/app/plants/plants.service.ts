import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PlantModel } from './plant-model';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPlants(): Observable<PlantModel[]> {
    return this.http.get<PlantModel[]>(this.apiUrl);
  }

}
