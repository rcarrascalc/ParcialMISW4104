import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { PlantListComponent } from './plant-list.component';
import { PlantsService } from '../plants.service';
import { of } from 'rxjs';
import { PlantModel } from '../plant-model';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let plantsService: PlantsService;
  let fixture: ComponentFixture<PlantListComponent>;

  
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [PlantListComponent],
      providers: [
        {
          provide: PlantsService,
          useValue: {
            getPlants: () => of(Array.from(
              { length: 3 },
              () =>
                new PlantModel({
                  id: faker.number.int(),
                  nombre_comun: faker.lorem.word(),
                  nombre_cientifico: faker.lorem.word(),
                  tipo: faker.lorem.word(),
                  altura_maxima: faker.number.int(),
                  clima: faker.date.past(),
                  sustrato_siembra: faker.number.int(),
                })
            )),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    plantsService = TestBed.inject(PlantsService);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const plants = Array.from(
      { length: 3 },
      () =>
        new PlantModel({
          id: faker.number.int(),
          nombre_comun: faker.lorem.word(),
          nombre_cientifico: faker.lorem.word(),
          tipo: faker.lorem.word(),
          altura_maxima: faker.number.int(),
          clima: faker.date.past(),
          sustrato_siembra: faker.number.int(),
        })
    );

    component.plants = plants;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
