const specifier2 = import.meta.url.split('/').slice(-2).join('/')
console.log('Inside', specifier2)

export const value = '*' + specifier2
