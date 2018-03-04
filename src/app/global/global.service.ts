import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    public isMehra: Boolean = true;
    public hostRemote = 'https://api-mehra.herokuapp.com/api/';
    public hostLocal = 'http://localhost:8787/api/';
    public isLocal: Boolean = true;
    public baseUrl = 'https://jitendrasagoriya.github.io/mahrametrimonial-ui/';

    public localBaseUrl = 'http://localhost:8787/';

    constructor() {
        if (this.isLocal) {
            this.baseUrl = 'http://localhost:4200/';
        }
    }
}
