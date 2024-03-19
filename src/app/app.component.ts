import { Component, inject } from '@angular/core'
import { Movie, User } from './models'
import { MovieService } from './movie.service'
import { UserService } from './user.service'
import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { Observable, map } from 'rxjs'
import { MainComponent } from './main/main.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MainComponent],
})
export class AppComponent {}
