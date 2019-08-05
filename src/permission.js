import router from '@/router'
import { getToken } from '@/utils/auth.js'

let whiteList = ['/login']
router.beforeEach(async (to, form, next) => {
  let token
  if (!token) {
    token = getToken()
  }
  if (!token) {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  } else {
    let path = to.path
    let role = JSON.parse(token)['role']
    switch (path) {
      // 管理员 role 1
      case '/user/user':
      case '/brand/brand':
        if (role !== 1) {
          next('/404')
        }
        break
      case '/material/category':
      case '/material/census/edit':
      case '/material/census/add':
        if (role !== 2) {
          next('/404')
        }
        break
    }

    next()
  }
})

router.afterEach(() => {

})
