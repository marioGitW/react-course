import { it, expect, describe } from 'vitest'
import { formatMoney } from './money.js'

describe('formatMoney', () => {
    it('formats 1999 cents as $19.99', () => {
        expect(formatMoney(1999)).toBe('$19.99')
    });
    it('display 2 decimals', () => {
        expect(formatMoney(2000)).toBe('$20.00')
        expect(formatMoney(100)).toBe('$1.00')
    })
    it('test zero cents', () => {
        expect(formatMoney(0)).toBe('$0.00')
    })
    it('test negative cents', () => {
        expect(formatMoney(-500)).toBe('-$5.00')
    })
})