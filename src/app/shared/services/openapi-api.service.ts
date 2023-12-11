import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,map } from 'rxjs';
import {
  OpenapiRequestInterface,
  OpenapiPaths,
  OpenapiPathMethods,
  OpenapiMap,
  OpenapiParameter
} from '../interfaces/openapi-request.interface';

@Injectable({
  providedIn: 'root'
})
  export class OpenapiApiService {

  constructor(private httpClient: HttpClient) {}

  public getRequests(): Observable<OpenapiRequestInterface>{
    return this
        .httpClient
        .get<OpenapiRequestInterface>('http://127.0.0.1:8081/v3/api-docs');
  }

  public getMaps(): Observable<OpenapiMap[]>{
    return this
        .getRequests()
        .pipe(map((item: OpenapiRequestInterface): OpenapiMap[]=>{
          let openapiMaps: OpenapiMap[] = [];
          for(const path in item['paths']){
            let parameter: OpenapiParameter = null;
            openapiMaps.push({
              url: path,
              methods: item['paths'][path]
            });
          }
          return openapiMaps.sort(this.sortOpenapiMaps);
        }));
  }

  private sortOpenapiMaps(m0: OpenapiMap, m1: OpenapiMap): number {
    let choice = 0;
    if(m0['url'] > m1['url'] ){
      choice = 1;
    } else if (m0['url'] < m1['url']) {
      choice = -1;
    }
    return choice;
  }

  private addOpenapiMethods(openapiMethods OpenapiPathMethods): {

            if (item['paths'][path][method]['parameters'][0] !== undefined) {
              parameter = {
                name = item['paths'][path][method]['parameters'][0]['name'],
                schema = item['paths'][path][method]['parameters'][0]['schema']
              };
            } else {
              parameter = null;
            }
  }
}
