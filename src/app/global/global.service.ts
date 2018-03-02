import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    public isMehra: Boolean = true;
    public hostRemote = 'https://infinite-ravine-36726.herokuapp.com/api/';
    public hostLocal = 'http://localhost:8787/api/';
    public isLocal: Boolean = false;
}
