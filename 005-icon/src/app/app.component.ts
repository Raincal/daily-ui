import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  	trigger('show', [
  		state('*', style({
  			opacity: 1
  		})),
  		transition('void => *', [
  			style({
  				opacity: .01
  			}),
  			animate(500)
  		])
  	])
  ]
})
export class AppComponent {
}
