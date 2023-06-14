
const fs = require('fs');

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  })
}

(async () => {
  function readFilePromise(path){
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data.toString('utf8'))
        }
      })
    })
  }
  console.log('1');
  console.log('当前文件夹', process.argv);
  await sleep(1000)
  const res = await readFilePromise('./1.text')
  console.log('res', res);
})()