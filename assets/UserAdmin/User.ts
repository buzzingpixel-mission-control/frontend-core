import { z } from 'zod';

export const UserSchema = z.object({
    id: z.string().min(1),
    isAdmin: z.boolean(),
    emailAddress: z.string().min(1).email(),
    name: z.string(),
    createdAt: z.string(),
    isActive: z.boolean(),
    timezone: z.string(),
});

type User = z.infer<typeof UserSchema>;

export default User;
