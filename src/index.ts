import { User } from './models/User';

const user = new User({ name: 'Darryl', age: 22 });

user.save();

console.log(user);
