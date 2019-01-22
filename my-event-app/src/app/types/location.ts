export class Location implements Identifyable {
    id: number;
    name: string;
    description: string;
    address: string;
    zipcode: string;
    location: string;
    countryAbb: string;

    constructor() {
      this.name = '';
      this.description = '';
      this.address = '';
      this.location = '';
      this.zipcode = '';
      this.countryAbb = '';
    }
}

