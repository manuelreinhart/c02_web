export class Organizer implements Identifyable {
    id: number;
    name: string;
    street: string;
    zipCode: number;
    city: string;
    countryCode: string;
    email: string;
    telephoneNumber: string;
    homepage: string;

    constructor() {
      this.name = '';
      this.street = '';
      // this.zipCode = -1;
      this.city = '';
      this.countryCode = '';
      this.email = '';
      this.telephoneNumber = '';
      this.homepage = '';
    }
}

