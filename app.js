const host = 'http://localhost'
const port = 3001

const testBtn1 = document.getElementById('test1-btn')
const testBtn2 = document.getElementById('test2-btn')
const testBtn3 = document.getElementById('test3-btn')
const testBtn4 = document.getElementById('test4-btn')
const mainContainer = document.getElementById('main-container')

const MAX_LAUGH_STG = 1.0
const MAX_RARE_ENCOUNT_POINT = 5
const MAX_TAKEN_PICTURE_WITH_MANY_PEOPLE_POINT = 15
const MAX_TAKE_GOOD_PICTURE_POINT = 5
const MAX_BETWEEN_PRODUCT_INTERACT_POINT = 10
const MAX_DIVERSITY_POINT = 10

testBtn1.addEventListener('click', () => {
  axios.get(host + ':' + port + '/test1')
    .then((res) => {
      console.log(res.data)
      removeAllChildren(mainContainer)
      appendEventList(res.data)
     })
    .catch((err) => {
      console.error(err)
    });
})

testBtn2.addEventListener('click', () => {
    axios.get(host + ':' + port + '/test2')
    .then((res) => {
      console.log(res.data)
      removeAllChildren(mainContainer)
      const canvas = document.createElement('canvas');
      createRadarChart(canvas, res.data.user_points)
      mainContainer.appendChild(canvas)
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

const appendEventList = (data) => {
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
    mainContainer.appendChild(ul)
  }
}
const createRadarChart = (canvas, user_points) => {
  new Chart(canvas, {
    type: 'radar',
    data: {
      labels: ['笑顔', 'レア', 'たくさん', '良い', '交流', '年齢'],
      datasets: [{
        label: '個人ポイント',
        data: normalizeUserPoints(user_points),
        backgroundColor: 'RGBA(243,180,183,0.5)',
        borderColor: 'RGBA(255,127,150,1)',
        borderWidth: 4,
        pointBackgroundColor: 'RGB(255,127,150)'
      }]
    },
    options: {
      title: {
        display: true,
        text: '個人成績'
      },
      // 凡例の設定
      legend: {
        position: 'left'
      },
      responsive: true,
      scale: {
        // point名のfsize
        pointLabels: {
          fontSize: 20
        },
        // 目盛り
        ticks: {
          callback: () => {
            return ''
          },
          suggestedMin: 0,
          suggestedMax: 100,
          stepSize: 20
        }
      }
    }
  })
}

const normalizeUserPoints = (user_points) => {
  const calcResults = []
  calcResults.push(user_points.laugh_stg / MAX_LAUGH_STG * 100)
  calcResults.push(user_points.rare_encount_point / MAX_RARE_ENCOUNT_POINT * 100)
  calcResults.push(user_points.taken_picture_with_many_people_point / MAX_TAKEN_PICTURE_WITH_MANY_PEOPLE_POINT * 100)
  calcResults.push(user_points.take_good_picture_point / MAX_TAKE_GOOD_PICTURE_POINT * 100)
  calcResults.push(user_points.between_product_interact_point / MAX_BETWEEN_PRODUCT_INTERACT_POINT * 100)
  calcResults.push(user_points.diversity_point / MAX_DIVERSITY_POINT * 100)
  return calcResults
}