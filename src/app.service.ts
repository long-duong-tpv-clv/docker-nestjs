import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  birthday: string;
}

@Injectable()
export class AppService {
  private users: User[] = [
    { id: 1, name: 'David', birthday: '12/12/1990' },
    { id: 2, name: 'Alan', birthday: '6/5/1995' },
    { id: 3, name: 'Sun', birthday: '8/7/1998' },
  ];

  getUsers(): User[] {
    return this.users;
  }
}
