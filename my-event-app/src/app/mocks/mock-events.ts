import { Event } from '../types/event';

export const EVENTS: Event[] = [

  { id: 1, title: 'Nova Rock', description: 'The best rock festival',startDate: new Date(2019,7,14), endDate: new Date(2019,7,16) , categoryId: 1, locationId: 1, organizerId: 1 },
  { id: 2, title: 'Frequency', description: 'A great rock event',startDate: new Date(2019,8,14), endDate: new Date(2019,8,16) , categoryId: 2, locationId: 1, organizerId: 1 },
  { id: 3, title: 'GTI Treffen', description: 'VW GTI Treffen am Wörthersee',startDate: new Date(2019,9,14), endDate: new Date(2019,9,16) , categoryId: 3, locationId: 1, organizerId: 1 },
  { id: 4, title: 'Lake Festival', description: 'Schwarlsee Festival mit coolen Bands',startDate: new Date(2019,5,14), endDate: new Date(2019,5,16) , categoryId: 4, locationId: 1, organizerId: 1 },
  { id: 5, title: 'Rock am Ring', description: 'Wie der Name sagt: Rock am Ring',startDate: new Date(2019,4,14), endDate: new Date(2019,4,16) , categoryId: 5, locationId: 1, organizerId: 1 },
  { id: 6, title: 'Tomorrowland', description: 'Größtes Festival Europas',startDate: new Date(2019,3,14), endDate: new Date(2019,3,16) , categoryId: 6, locationId: 1, organizerId: 1 }

];
