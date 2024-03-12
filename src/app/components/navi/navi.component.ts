import { ApplicationModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [FormsModule,ApplicationModule],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.scss'
})
export class NaviComponent {

}
