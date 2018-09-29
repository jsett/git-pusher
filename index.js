
const git = require('isomorphic-git');
const fs = require('fs');
git.plugins.set('fs', fs)

await git.clone({
  dir: 'test',
  corsProxy: 'https://cors.isomorphic-git.org',
  url: 'https://github.com/isomorphic-git/isomorphic-git',
  singleBranch: true,
  depth: 1
})
