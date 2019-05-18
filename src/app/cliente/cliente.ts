export class Cliente{


    constructor(id?: number, login?: string){
        this.id = id;
        this.login  = login;
    }
    
    /**
        * El id del cliente
        */
      id: number;
    
    /**
        * El login del cliente
        */
      login: string; 
    
    }
    