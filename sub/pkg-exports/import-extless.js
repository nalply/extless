import { value as importedValue } from './entry'

const specifier2 = import.meta.url.split('/').slice(-2).join('/')
console.log('Inside', specifier2)
console.log('Imported from ./index', importedValue)

export const value = '*' + specifier2  + ' ' + importedValue
