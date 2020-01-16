import { strictEqual } from 'assert'
import { value }  from 'pkg-exports/import-withext.js'

const specifier2 = import.meta.url.split('/').slice(-2).join('/')
console.log('Inside', specifier2)
console.log('Imported from pkg-exports:', value)

strictEqual(value, '*pkg-exports/import-withext.js *pkg-exports/entry.js')
