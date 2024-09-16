import type { UserDetail } from '@/shared/types/user'

export const isUserAuthenticated = (): boolean => {
  const userDetailString = localStorage.getItem('userDetail')
  if (!userDetailString) {
    
    return false
  }

  try {
    const userDetail = JSON.parse(userDetailString) as UserDetail
    return userDetail.isLoggedIn
  } catch (error) {
    
    return false
  }
}

export const getUserDetails = (): UserDetail | null => {
  const userDetailString = localStorage.getItem('userDetail')
  if (!userDetailString) {
    
    return null
  }

  try {
    return JSON.parse(userDetailString) as UserDetail
  } catch (error) {
    
    return null
  }
}
