import {Injectable} from '@Angular/core';

@Injectable()

export class UserService{
    private _name: string;
    private _age: number;
    private _sexo: string;

    constructor(){
        this._name = 'John Conor';
        this._age = 31;
        this._sexo = 'M';
    }

    get name(){
        return this._name;
    }

    set name(newVal){
        console.log('Set name = ' + newVal);
        this._name = newVal;
    }

    get age(){
        return this._age;
    }

    set age(newVal){
        console.log('Set age = ' + newVal);
        this._age = newVal;
    }
    get sexo(){
        return this._sexo;
    }

    set sexo(newVal){
        console.log('Set sexo = ' + newVal);
        this._sexo = newVal;
    }
}
