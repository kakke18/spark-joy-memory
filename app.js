const host = 'http://localhost'
const port = 3001

const testBtn1 = document.getElementById('test1-btn')
const testBtn2 = document.getElementById('test2-btn')
const testBtn3 = document.getElementById('test3-btn')
const testBtn4 = document.getElementById('test4-btn')
const mainContainer = document.getElementById('main-container')

testBtn1.addEventListener('click', () => {
  axios.get(host + ':' + port + '/test1')
    .then((res) => {
      console.log(res.data)
      const data = res.data
      for (let i = 0; i < data.length; i++) {
        const li1 = document.createElement('li')
        li1.innerText = data[i].id
        const li2 = document.createElement('li')
        li2.innerText = data[i].name
        const li3 = document.createElement('li')
        li3.innerText = data[i].date
        const ul = document.createElement('ul')
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        removeAllChildren(mainContainer)
        mainContainer.appendChild(ul)
      }
    })
    .catch((err) => {
      console.error(err)
    });
})

testBtn2.addEventListener('click', () => {
    axios.get(host + ':' + port + '/test2')
    .then((res) => {
      console.log(res.data)
      const data = res.data
      const li1 = document.createElement('li')
      li1.innerText = 'laugh_stg: ' + data.user_points.laugh_stg
      const li2 = document.createElement('li')
      li2.innerText = 'rare_encount_point: ' + data.user_points.rare_encount_point
      const li3 = document.createElement('li')
      li3.innerText = 'taken_picture_with_many_people_point: ' + data.user_points.taken_picture_with_many_people_point
      const li4 = document.createElement('li')
      li4.innerText = 'take_good_picture_point: ' + data.user_points.take_good_picture_point
      const li5 = document.createElement('li')
      li5.innerText = 'between_product_interact_point: ' + data.user_points.between_product_interact_point
      const li6 = document.createElement('li')
      li6.innerText = 'diversity_point: ' + data.user_points.diversity_point
      const ul = document.createElement('ul')
      ul.appendChild(li1)
      ul.appendChild(li2)
      ul.appendChild(li3)
      ul.appendChild(li4)
      ul.appendChild(li5)
      ul.appendChild(li6)
      removeAllChildren(mainContainer)
      mainContainer.appendChild(ul)
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

const removeAllChildren = (ele) => {
  while (ele.firstChild) {
    ele.removeChild(ele.firstChild);
  }
}