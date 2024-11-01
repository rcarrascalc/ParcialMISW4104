import { Component, OnInit } from '@angular/core';
import { PlantModel } from '../plant-model';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css'
})
export class PlantListComponent implements OnInit  {
  plants: PlantModel[]=[];
  interior: number=0;
  exterior: number=0;

  constructor(private plantsService: PlantsService){
  }

  ngOnInit() {
    this.getAllPnats();
  }


  getAllPnats=()=>{
    this.plantsService.getPlants().subscribe(data=>{
      this.plants=data;
      this.exterior=data.filter(plant=>plant.tipo=="Exterior").length;
      this.interior=data.filter(plant=>plant.tipo=="Interior").length;
    });
  }

}
