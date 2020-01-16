import { strictEqual } from 'assert'
import { value } from 'pkg-type-module/entry.js'

const specifier2 = import.meta.url.split('/').slice(-2).join('/')
console.log('Inside', specifier2)
console.log('Imported from pkg-type-module/entry.js:', value)

strictEqual(value, '*pkg-type-module/entry.js')
