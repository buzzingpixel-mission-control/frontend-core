import { z } from 'zod';
import { UserSchema } from './User';

export const UsersSchema = z.array(UserSchema);

type Users = z.infer<typeof UsersSchema>;

export default Users;
