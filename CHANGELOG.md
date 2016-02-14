<a name="3.0.4"></a>
## [3.0.4](https://github.com/colinmeinke/universal-js/compare/v3.0.3...v3.0.4) (2016-02-14)


### Bug Fixes

* **hot:** finally accept class components are required for hot reloading ([0682ef9](https://github.com/colinmeinke/universal-js/commit/0682ef9))



<a name="3.0.3"></a>
## [3.0.3](https://github.com/colinmeinke/universal-js/compare/v3.0.2...v3.0.3) (2016-02-14)


### Bug Fixes

* **hot:** hot reload components ([06ba505](https://github.com/colinmeinke/universal-js/commit/06ba505))



<a name="3.0.2"></a>
## [3.0.2](https://github.com/colinmeinke/universal-js/compare/v3.0.1...v3.0.2) (2016-02-14)


### Bug Fixes

* console context errors ([1aa64bd](https://github.com/colinmeinke/universal-js/commit/1aa64bd))



<a name="3.0.1"></a>
## [3.0.1](https://github.com/colinmeinke/universal-js/compare/v3.0.0...v3.0.1) (2016-02-13)


### Bug Fixes

* **store:** dont redeclare state variable ([b253d2a](https://github.com/colinmeinke/universal-js/commit/b253d2a))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/colinmeinke/universal-js/compare/v2.1.0...v3.0.0) (2016-02-13)


### Chores

* **npm:** update dependencies ([0ffa5c6](https://github.com/colinmeinke/universal-js/commit/0ffa5c6))


### BREAKING CHANGES

* npm: universal redux router api has changed
https://github.com/colinmeinke/universal-redux-router/releases/tag/v2.0.0



<a name="2.1.0"></a>
# [2.1.0](https://github.com/colinmeinke/universal-js/compare/v2.0.0...v2.1.0) (2016-02-08)


### Bug Fixes

* **environment:** always bundle and run correct environment ([0fb3872](https://github.com/colinmeinke/universal-js/commit/0fb3872))

### Features

* **hot:** hot reload redux reducers ([5ea0b0b](https://github.com/colinmeinke/universal-js/commit/5ea0b0b))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/colinmeinke/universal-js/compare/v1.1.3...v2.0.0) (2016-02-06)


### Chores

* **npm:** update dependencies ([a65a8d6](https://github.com/colinmeinke/universal-js/commit/a65a8d6))


### BREAKING CHANGES

* npm: universal reudxux router api has changed
https://github.com/colinmeinke/universal-redux-router/releases/tag/v1.0.0



<a name="1.1.3"></a>
## [1.1.3](https://github.com/colinmeinke/universal-js/compare/v1.1.2...v1.1.3) (2016-01-29)


### Bug Fixes

* **input:** read input value onchange before timeout ([c1c0dba](https://github.com/colinmeinke/universal-js/commit/c1c0dba))



<a name="1.1.2"></a>
## [1.1.2](https://github.com/colinmeinke/universal-js/compare/v1.1.1...v1.1.2) (2016-01-27)


### Bug Fixes

* **build:** bundle webpack with correct node env in production ([353593b](https://github.com/colinmeinke/universal-js/commit/353593b))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/colinmeinke/universal-js/compare/v1.1.0...v1.1.1) (2016-01-20)


### Bug Fixes

* **css:** hot reload imported styles ([e577cdb](https://github.com/colinmeinke/universal-js/commit/e577cdb))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/colinmeinke/universal-js/compare/v1.0.2...v1.1.0) (2016-01-19)


### Bug Fixes

* make root component a class to enable hot module reloading ([2f2c380](https://github.com/colinmeinke/universal-js/commit/2f2c380)), closes [#13](https://github.com/colinmeinke/universal-js/issues/13)

### Features

* **css:** hot reload css and add sourcemap support ([0e662b9](https://github.com/colinmeinke/universal-js/commit/0e662b9))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/colinmeinke/universal-js/compare/v1.0.1...v1.0.2) (2016-01-17)


### Bug Fixes

* **build:** dont copy non-existent css source map file ([3aa7eec](https://github.com/colinmeinke/universal-js/commit/3aa7eec))
* **store:** get devtools from components directory ([6c0131a](https://github.com/colinmeinke/universal-js/commit/6c0131a))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/colinmeinke/universal-js/compare/v1.0.0...v1.0.1) (2016-01-17)


### Bug Fixes

* **devtools:** dont import devtools to store in production ([1c526d5](https://github.com/colinmeinke/universal-js/commit/1c526d5))
* **express:** dont hard code port ([fedd998](https://github.com/colinmeinke/universal-js/commit/fedd998))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/colinmeinke/universal-js/compare/v0.7.1...v1.0.0) (2016-01-14)




<a name="0.7.1"></a>
## [0.7.1](https://github.com/colinmeinke/universal-js/compare/v0.7.0...v0.7.1) (2016-01-12)


### Bug Fixes

* add .css extension to import declarations ([1711ce1](https://github.com/colinmeinke/universal-js/commit/1711ce1))
* **tests:** add test handling of css imports ([74e08b7](https://github.com/colinmeinke/universal-js/commit/74e08b7)), closes [#14](https://github.com/colinmeinke/universal-js/issues/14)



<a name="0.7.0"></a>
# [0.7.0](https://github.com/colinmeinke/universal-js/compare/v0.6.0...v0.7.0) (2016-01-12)


### Bug Fixes

* **npm:** add eslint-babel package that eslint-config-spaced now relies upon ([57c7454](https://github.com/colinmeinke/universal-js/commit/57c7454))

### Features

* **styles:** move from inline styles to css modules ([3587aa1](https://github.com/colinmeinke/universal-js/commit/3587aa1)), closes [#1](https://github.com/colinmeinke/universal-js/issues/1)



<a name="0.6.0"></a>
# [0.6.0](https://github.com/colinmeinke/universal-js/compare/v0.5.1...v0.6.0) (2016-01-03)




<a name="0.5.1"></a>
## [0.5.1](https://github.com/colinmeinke/universal-js/compare/v0.4.0...v0.5.1) (2015-10-31)




<a name="0.4.0"></a>
# [0.4.0](https://github.com/colinmeinke/universal-js/compare/v0.3.1...v0.4.0) (2015-10-06)




<a name="0.3.1"></a>
## [0.3.1](https://github.com/colinmeinke/universal-js/compare/v0.3.0...v0.3.1) (2015-10-05)




<a name="0.3.0"></a>
# [0.3.0](https://github.com/colinmeinke/universal-js/compare/v0.2.1...v0.3.0) (2015-10-05)




<a name="0.2.1"></a>
## [0.2.1](https://github.com/colinmeinke/universal-js/compare/v0.2.0...v0.2.1) (2015-10-05)




<a name="0.2.0"></a>
# [0.2.0](https://github.com/colinmeinke/universal-js/compare/v0.1.1...v0.2.0) (2015-10-05)




<a name="0.1.1"></a>
## [0.1.1](https://github.com/colinmeinke/universal-js/compare/v0.1.0...v0.1.1) (2015-10-04)




<a name="0.1.0"></a>
# 0.1.0 (2015-10-03)




