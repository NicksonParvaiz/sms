import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
export class Faculty{
    constructor(
        public Id : number,
        public Name : string,
        public FatherName : string,
        public Class : string,
        public Phone : string,
        public Email : string,
        public Address : string,
        public DateOfBirth : string,
        public CNIC : string,
    ){

    }
}