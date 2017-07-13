import { Component, OnInit} from '@angular/core';
import { HttpService } from './shared/http.service';
import { IClient } from './shared/client.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public clients: any;
  public currentClient: IClient;
  public queryString: string;

  /**
   * @param {HttpService} httpService
   */
  constructor( private httpService: HttpService ) {}

  public ngOnInit(): void {
    this.httpService.fetchAll().subscribe((data: Response) => {
      this.clients = data.json();
      this.currentClient = data.json()[0];
    });
  }

  /**
   * @param {IClient} selectedClient
   */
  public selectClient(selectedClient: IClient) {
    this.currentClient = selectedClient;
  }
}
