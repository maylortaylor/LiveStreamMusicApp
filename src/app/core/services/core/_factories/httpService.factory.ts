import { XHRBackend } from '@angular/http';
import { AngularReduxRequestOptions } from '../http/angularReduxRequest.options';
import { HttpService } from '../http/http.service';
import { LoaderService } from '../loader/loader.service';

function httpServiceFactory(backend: XHRBackend, options: AngularReduxRequestOptions, loaderService: LoaderService ) {
    return new HttpService(backend, options, loaderService);
}

export { httpServiceFactory };