export class Organizer implements Identifyable {
    id: number;
    name: string;
    address: string;
    uid: number;
    email: string;
    telephoneNumber: string;
    homepage: string;
    username: string;
    password: string;
    status: number;
    role: number;

    constructor() {
      this.name = '';
      this.address = '';
      this.email = '';
      this.homepage = '';
      this.username = '';
      this.password = '';
    }
  }

