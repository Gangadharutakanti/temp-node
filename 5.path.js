const path=require('path')

console.log(path.sep)

const filename=path.join('/5a.path','5a.innerfolder','text.txt')
console.log(filename)

const base=path.basename(filename)
console.log(base)

const absolute=path.resolve(__dirname,'5a.path','5a.innerfolder','text.txt')
console.log(absolute)