export type Person = string;
type Debtor = Person;
type Creditor = Person;
type Amount = Number;

export type Debt = [Debtor, Creditor, Amount]

export function computeBalances(debts: Array<Debt>) {
    return {}
    // balances = {person: 0 for person in people}

    // for (debtor, creditor, value) in debts:
    //     balances[debtor] -= value
    //     balances[creditor] += value
    // return balances
}
