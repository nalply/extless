import { strictEqual } from 'assert'
import { value }  from 'pkg-exports/import-extless'

const specifier2 = import.meta.url.split('/').slice(-2).join('/')
console.log('Inside', specifier2)
console.log('Imported from pkg-exports:', value)

strictEqual(value, '*pkg-exports/import-extless.js *pkg-exports/entry.js')
