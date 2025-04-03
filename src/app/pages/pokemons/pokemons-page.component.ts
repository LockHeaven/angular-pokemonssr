import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonListSkeletonComponent } from './ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonService } from '../../pokemons/services/pokemon.service';
import { SimplePokemon } from '../../pokemons/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  private pokemonService = inject(PokemonService);
  public pokemons = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);

  public currentPage = toSignal<number>(
    this.route.queryParamMap.pipe(
      map((params) => params.get('page') ?? '1'),
      map((page) => (isNaN(+page) ? 1 : +page)),
      map((page) => Math.max(1, page))
    )
  );

  // isLoading = signal(false);

  // private appRef = inject(ApplicationRef);

  // private appState$ = this.appRef.isStable.subscribe((isStable) => {
  //   console.log(isStable);
  // });

  ngOnInit(): void {
    console.log(this.currentPage());
    this.loadPokemons();
    // setTimeout(() => {
    //   this.isLoading.set(true);
    // }, 5000);
  }

  public loadPokemons(page = 0) {
    const pageToLoad = this.currentPage()! + page;
    this.pokemonService
      .loadPage(pageToLoad)
      .pipe(
        tap(() => {
          this.router.navigate([], { queryParams: { page: pageToLoad } });
          this.title.setTitle(`Pokemons Page: ${pageToLoad}`);
          this.pokemons.set([]);
        })
      )
      .subscribe((pokemons) => {
        this.pokemons.set(pokemons);
        // console.log('OnInit');
      });
  }

  // ngOnDestroy(): void {
  //   this.appState$.unsubscribe();
  // }
}
