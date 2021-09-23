import { Note } from "./note";

export class User {
    [x: string]: any;
    id: number | undefined;
    birthDate: Date | undefined;
    name: string | undefined;
    avatar: string | undefined;
    bio: string | undefined;

    notes:Note[]=[];
}
