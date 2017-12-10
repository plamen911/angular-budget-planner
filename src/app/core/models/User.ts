export class User {
    constructor(public name: string,
                public email: string,
                public password?: string,
                public confPassword?: string,
                public authtoken?: string) {}
}
