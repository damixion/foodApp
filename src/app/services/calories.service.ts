import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class CaloriesService {


   items: AngularFireList<Item> = null;

  constructor(private firebase: AngularFireDatabase)
  {
    this.items = firebase.list('/meals');
  }

  getMeals(): AngularFireList<Item>
  {
   return this.items;
  }

  addMeals(meal: Item): void
  {
    this.items.push(meal);
  }

  deleteAll()
  {
    this.items.remove();
  }



}
