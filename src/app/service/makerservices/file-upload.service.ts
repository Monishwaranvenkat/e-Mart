import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  SERVER_URL: string = 'http://localhost:9002/';
  constructor(private httpClient: HttpClient) { }

  public upload(formData) {
	return this.httpClient.post("http://localhost:9002/csvupload", formData, {  
      reportProgress: true,  
      observe: 'events'  
    });  
}
}
