import { Component } from 'angluar2/core';
import { AppService } from './app.service';

@Component({
	selector:'my-app',
	template:`
		FirstName:<input [(ngModel)]="firstname">
		{{firstname}}
	`,
	providers:[AppService]
})

export class AppComponent {
	firstname:string = '';
	construtor(private _appService:AppService){
		this.getName();
	}
	getName(){
		this.firstname = this._appService.getName();
	}
}
