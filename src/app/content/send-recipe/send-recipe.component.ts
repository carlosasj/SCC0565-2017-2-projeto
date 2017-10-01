import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './send-recipe.component.html',
    styleUrls: ['./send-recipe.component.scss']
})
export class SendRecipeComponent implements OnInit {
    // TODO Isso vai ser pego de um serviço
    categories = ['Sobremesa', 'Salada', 'Prato Principal', 'Entrada'];
    constructor() { }

    ngOnInit() {
    }

}
