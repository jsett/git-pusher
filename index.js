
const git = require('isomorphic-git');
const fs = require('fs');
git.plugins.set('fs', fs)

git.clone({
  dir: 'test',
  url: 'https://github.com/zonpython/test2.git',
  singleBranch: true,
  depth: 1
})
console.log("done")
