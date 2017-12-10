import {ExpenceModel} from './expence.model';

export class BudgetPlanner {
    constructor(public income: number,
                public budget: number,
                public expenses?: ExpenceModel[]) {
    }
}
