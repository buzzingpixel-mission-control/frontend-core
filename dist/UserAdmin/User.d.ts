import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    id: z.ZodString;
    isAdmin: z.ZodBoolean;
    emailAddress: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodString;
    isActive: z.ZodBoolean;
    timezone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    isAdmin?: boolean;
    emailAddress?: string;
    name?: string;
    createdAt?: string;
    isActive?: boolean;
    timezone?: string;
}, {
    id?: string;
    isAdmin?: boolean;
    emailAddress?: string;
    name?: string;
    createdAt?: string;
    isActive?: boolean;
    timezone?: string;
}>;
type User = z.infer<typeof UserSchema>;
export default User;
