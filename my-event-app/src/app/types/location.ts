export class Location implements Identifyable {
    id: number;
    name: string;
    description: string;
    address: string;
    zipcode: string;

    constructor() {
      this.name = "";
      this.description = "";
      this.address = "";
      this.zipcode = "";
    }
  }