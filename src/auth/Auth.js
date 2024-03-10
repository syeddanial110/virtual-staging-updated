import Cookies from 'js-cookie'

export const setToken = (token) => {
  return Cookies.set('token', token, { expires: 360 })
}

export const getToken = () => {
  return Cookies.get('token')
}

export const removeToken = () => {
  return Cookies.remove("token")
}

export const setUserId = (userId) => {
  return Cookies.set('userId', userId, { expires: 360 })
}

export const getUserId = () => {
  return Cookies.get('userId')
}


export const removeUserId = () => {
  return Cookies.remove("userId")
}
