


async function getResponse() {
  const res =await fetch(url, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: '请讲一个小故事'
    })
  })
  const reader = res.body.getReader()
  const textDecoder = new TextDecoder()
  while(1) {
    const { done, value } = await reader.read()
    if (done) {
      break;
    }
    const str = textDecoder.decode(value)
    console.log('持续获取的数据', str);
  }
}

