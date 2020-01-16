import { strictEqual } from 'assert'
import { value }  from 'pkg-exports/entry.js'

const specifier2 = import.meta.url.split('/').slice(-2).join('/')
console.log('Inside', specifier2)
console.log('Imported from pkg-exports:', value)

strictEqual(value, '*pkg-exports/entry.js')
