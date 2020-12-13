import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { GenderCalor } from '../models/CaloriesNorms';
import { CaloriesService } from '../services/calories.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss']
})
export class CaloriesComponent implements OnInit {

  nameMeal: string;
  itemKcal: number;
  sumCalories = 0;
  needCalories = 0;
  selectGender = null;
  restCalories =  0;
  listMeals: Item[];
  dataSource = null;

  displayedColumns: string[] = ['position', 'name', 'calories'];
  gender: GenderCalor[] = [{text: 'kobieta', kalor: 2000 }, {text: 'mężczyzna', kalor: 2400 } ];

  constructor(private snackBar: MatSnackBar, private serviceCalories: CaloriesService ){}

  ngOnInit(): void  {this.setTable(); }

  dodaj(): void
  {
    if (this.nameMeal == null || this.itemKcal === undefined)
    {
      this.openSnackBar('Nie poprawne dane', this.nameMeal);
    }
    else
    {
    this.serviceCalories.addMeals({position: this.listMeals.length + 1, name: this.nameMeal, calories: this.itemKcal});
    this.nameMeal = '';
    this.itemKcal = undefined;
    this.setTable();
    }
  }

  setTable(): void
  {
      this.serviceCalories.getMeals().valueChanges().subscribe((ml) => {
      this.listMeals = ml;
      this.dataSource = new MatTableDataSource<Item>(this.listMeals);
      this.sumCalories = 0;
      this.listMeals.forEach( (item) => {
        this.sumCalories += item.calories;
       });
       this.refreshNeedCalories();
      });
  }

  refreshNeedCalories(): void
  {
    this.needCalories = this.gender[this.selectGender].kalor;
    this.restCalories = this.needCalories - this.sumCalories;
  }


  openSnackBar(message: string, action: string): void
  {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  reset()
  {
    this.serviceCalories.deleteAll();
    this.setTable();
  }

}

