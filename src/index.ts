import { User } from './models/User';

const user = new User({ name: 'Darryl', age: 20 });

user.set({ name: 'New Name' });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {});

console.log(user);
