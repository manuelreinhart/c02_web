export class Organizer implements Identifyable {
    id: number;
    name: string;
    street: string;
    zipCode: number;
    location: string;
    countryCode: string;
    email: string;
    telephoneNumber: string;
    homepage: string;

    constructor() {
      this.name = '';
      this.street = '';
      // this.zipCode = -1;
      this.location = '';
      this.countryCode = '';
      this.email = '';
      this.telephoneNumber = '';
      this.homepage = '';
    }
}

