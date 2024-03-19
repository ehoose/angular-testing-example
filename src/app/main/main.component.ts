import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Movie, User } from '../models'
import { MovieService } from '../movie.service'
import { UserService } from '../user.service'
import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { Observable, map } from 'rxjs'
import { SidebarComponent } from '../components/sidebar/sidebar.component'

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, AsyncPipe, SidebarComponent],
  styles: [
    `
      .wrapper {
        display: grid;
        gap: 20px;
        margin-left: auto;
        margin-right: auto;
        max-width: 1000px;
        min-height: 100%;
        grid-template-rows: 1fr 3fr auto;
        grid-template-areas:
          'header'
          'sidebar'
          'content'
          'footer';
      }

      .header {
        grid-area: header;
        border-bottom: 1px solid #000;
      }

      .content {
        grid-area: content;
      }

      .side {
        grid-area: sidebar;
      }

      .footer {
        grid-area: footer;
      }

      @media (min-width: 500px) {
        .wrapper {
          grid-template-rows: auto 1fr auto;
          grid-template-columns: 100px auto;
          grid-template-areas:
            'header  header'
            'sidebar content'
            'footer  footer';
        }
      }
    `,
  ],
  template: `
    <div class="wrapper">
      <header class="header">
        <h1>Company Name</h1>
        <p id="greeting" *ngIf="user$ | async as user">
          Hello, {{ user.firstName }}!
        </p>
      </header>

      <aside class="side">
        <angular-sidebar />
      </aside>
      <article class="content">
        <h2>Dashboard</h2>
        <ng-container *ngIf="movies$ | async as movies">
          <ul id="movies" *ngIf="movies.length > 0">
            <li *ngFor="let movie of movies">
              <p>{{ movie.title }}</p>
            </li>
          </ul>
        </ng-container>
        <button (click)="onFetchMoviesClick()">Fetch movies</button>
      </article>
      <footer class="footer">
        Copyright &copy; {{ currentDate | date : 'yyyy' }}
      </footer>
    </div>
  `,
})
export class MainComponent implements OnInit {
  currentDate = new Date()
  userService = inject(UserService)
  movieService = inject(MovieService)

  user$: Observable<User>
  movies$: Observable<Movie[]>

  ngOnInit() {
    this.user$ = this.userService.getUser()
  }

  onFetchMoviesClick() {
    console.log(this.movies$)
    this.movies$ = this.movieService
      .listMovies()
      .pipe(map((moviesResponse) => moviesResponse.data.movies))
  }
}
