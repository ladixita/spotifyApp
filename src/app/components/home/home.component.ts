import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(
    private spotify: SpotifyService
    // private http: HttpClient
  ) {
    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      });
    // console.log('Constructor del Home hecho')
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe((resp: any) => {
    //     this.paises = resp;
    //     console.log(resp);
    //   });
   }


}
