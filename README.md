# mdb-json
Working with **.MDB** files from a linux environment can be a pain in the a$$. So after playing with a couple existing frameworks I ended up just building my own wrapper and decided to make it a package for future use.

[Relies on mdbTools](#requirements)

<small>*Only built the wrapper for MDB -> JSON. However if requested I will build out the functions for CSV, Table Lists, And Exports*</small>

## Install
```
npm install mdb-json
```

## Usage
### Async
```javascript
const { parseMDB } = require('mdb-json');

function = async () => {
 const json = await parseMDB(filePath, Table)
}
```

### ES5
```javascript
const { parseMDB } = require('mdb-json');

function = () => {
 parseMDB(filePath, Table).then(json => {
     //EXAMPLE FOR AN .MDB FILE WITH A TABLE CALLED PEOPLE
     //parseMDB('absoluteFilePath.mdb', 'People')
 }).catch(err => {
     //Err = Error parsing data or finding file.
 })
}
```

---

## Notes
Make sure the file path is absolute. If using this in your node project and trying to pass the file in a current directory. Use Path to resolve the full file name.

WILL NOT WORK: './file.mdb'

WILL WORK: '/user/development/folder/currentdirectory/file.mdb'

---

## Requirements
You **must** have [mdbtools](https://github.com/mdbtools/mdbtools) installed on your system.

### Linux
```
apt install mdbtools
```

### OSX (Working as of BigSur)
```
brew install mdbtools
```