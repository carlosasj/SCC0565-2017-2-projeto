import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipeTitle: string;
  @Input() img: string;
  @Input() abstract: string;
  @Input() author: string;
  @Input() submitDate: string|number|Date;

  constructor() { }

  ngOnInit() {
  }

}
