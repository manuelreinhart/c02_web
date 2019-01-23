export class Location implements Identifyable {
    id: number;
    name: string;
    description: string;
    address: string;
    zipCode: string;
    city: string;
    countryAbb: string;


    constructor() {
      this.name = '';
      this.description = '';
      this.address = '';
      this.city = '';
      this.zipCode = '';
      this.countryAbb = '';

    }
}

