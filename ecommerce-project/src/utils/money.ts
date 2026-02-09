export function formatMoney(cents:number):string {
    if (cents < 0) {
        return `-$${(-cents / 100).toFixed(2)}`;
    }
    return `$${(cents / 100).toFixed(2)}`;
}