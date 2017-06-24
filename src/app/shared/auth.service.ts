import { Injectable } from "@angular/core";
import {Http,Headers} from "@angular/http";
import { environment } from '../../environments/environment';
import 'rxjx/add/operator/map';

@Injectable()

export class authService{
private username:string;
private password:string;
private URL:string=environment.API_URL;
constructor(private _http:Http){}
    getKey(username,password)
    {
        return this._http.get(this.URL+'/aouth/token')
            .map(
                res=>res.json()
            )   
    }
    
}
