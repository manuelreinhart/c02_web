export class Category implements Identifyable {
    id: number;
    title: string;
    description: string;
    parentCategoryId: number;

    constructor() {
      this.title = "";
      this.description = "";
      this.parentCategoryId = -1;
    }
  }