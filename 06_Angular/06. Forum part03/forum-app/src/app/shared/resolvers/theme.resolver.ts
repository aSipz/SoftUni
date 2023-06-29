import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { ITheme } from "../interfaces";
import { ApiService } from "src/app/api.service";
import { inject } from "@angular/core";



export const themeResolver: ResolveFn<ITheme> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITheme> | Promise<ITheme> | ITheme => {
    const apiService = inject(ApiService);
    // const router = inject(Router);

    const themeId = route.params['id'];

    // if (!themeId) {
    //     router.navigate(['/themes']);
    //     return;
    // }

    return apiService.getTheme(themeId);

}
// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
// import { ApiService } from "src/app/api.service";
// import { ITheme } from "../interfaces";
// import { Observable } from "rxjs";

// @Injectable({
//     providedIn: 'root'
// })
// export class ThemeResolver implements Resolve<ITheme | null> {

//     constructor(private apiService: ApiService, private router: Router) { }

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ITheme | Observable<any> | Promise<any> | any {
//         const themeId = route.params['id'];

//         if (!themeId) {
//             this.router.navigate(['/themes']);
//             return null;
//         }

//         return this.apiService.getTheme(themeId);
//     }
// }

