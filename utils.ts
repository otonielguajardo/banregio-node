import knexfile from './knexfile';

export const asyncForEach = async function (array: Array<any>, callback: any) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

export const database = require('knex')(knexfile.development);

export interface AccountModel {
    id: number;
    client_id: string;
    amount: number;
    status: string;
}

export interface LoanModel {
    id: number;
    client_id: string;
    date: string;
    amount: number;
    status: string;
}

export interface PaymentModel {
    id?: number;
    account_id: number;
    client_id: string;
    amount: number;
    interest: number;
    term: number;
    tax: number;
}
