import { Component, OnInit, OnDestroy } from '@angular/core';
import { OpenapiApiService } from '../../shared/services/openapi-api.service';
import { Observable, Subscription } from 'rxjs';
import { OpenapiMap } from '../../shared/interfaces/openapi-request.interface';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-openapi',
  templateUrl: './openapi.component.html',
  styles: ['* {  background: #101010;  color: lightblue;}']
})
export class OpenapiComponent implements OnInit, OnDestroy {
    constructor(private openapiApiService: OpenapiApiService){}

    public openapiMaps$?: Observable<OpenapiMap[]>;
    private subscription?: Subscription;

    public ngOnInit(): void {
        this.openapiMaps$ = this
                .openapiApiService
                .getMaps()
                .pipe(untilDestroyed(this));
        this.subscription = this
                .openapiMaps$
                .subscribe(item=>console.log(JSON.stringify(item, null, 2)));
    }

    public getKeys(openapiMap: OpenapiMap): string[]{
      let methods: string[] = [];
      for(const method in openapiMap['methods']){
        methods.push(method);
      }
      return methods;
    }

    public ngOnDestroy(): void {
        if(this.subscription !== undefined){
            this.subscription.unsubscribe();
        }
    }
}
