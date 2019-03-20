require('dotenv').config()
T
const host = process.env.HOST
const port = process.env.PORT

const testBtn1 = document.getElementById('test1-btn')
const testBtn2 = document.getElementById('test2-btn')
const testBtn3 = document.getElementById('test3-btn')
const testBtn4 = document.getElementById('test4-btn')

testBtn1.addEventListener('click', () => {
  axios.get(host + ':' + port + '/test1')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.error(err)
    });
})

testBtn2.addEventListener('click', () => {
    axios.get(host + ':' + port + '/test2')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.error(err)
    });
})

testBtn3.addEventListener('click', () => {
    axios.get(host + ':' + port + '/test3')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.error(err)
    });
})

testBtn4.addEventListener('click', () => {
    axios.get(host + ':' + port + '/test4')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.error(err)
    });
})
