export namespace IApi {
  export namespace Login {
    export interface Request {
      phone: string;
      password: string;
    }
    export interface Response {
      token: string;
      user: User;
    }
  }

  export interface User {}
}

export namespace IEntity {
  export interface User {
    id: number;
    name: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
  }
}

export namespace IForm {
  export interface Login {
    phone: string;
    password: string;
  }
}
