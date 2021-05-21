import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {
  public isConnectedToBackend: boolean = false;

  constructor() { }

  hostnameTest(): void {
    if (window.location.host == "localhost:3000") {
      this.isConnectedToBackend = true;
    }
  }
}
