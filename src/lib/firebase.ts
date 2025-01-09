import type { FirebaseOptions } from 'firebase/app'
import { initializeApp } from 'firebase/app'
import type { User } from 'firebase/auth'
import { getAuth, onAuthStateChanged, onIdTokenChanged } from 'firebase/auth'
import { debounce } from 'lodash-es'

import { ENV } from '@/constants/env'
import { AuthService } from '@/services'
import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig: FirebaseOptions = {
  apiKey: ENV.FIREBASE_API_KEY,
  appId: ENV.FIREBASE_APP_ID,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  projectId: ENV.FIREBASE_PROJECT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

const initializeFirebase = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getUserData = debounce(async (_user: User) => {
    const currentProfile = useUserStore.getState().profile
    if (currentProfile) return
    try {
      await AuthService.getProfile()
    } catch (error) {
      console.error('Failed to fetch profile:', error)
      await AuthService.logout()
      useAuthStore.getState().logout()
    }
  }, 50)

  const refreshAuthToken = async (user: User) => {
    try {
      const accessToken = await user.getIdToken(true) // Pass true to force refresh the token
      useAuthStore.getState().login({
        accessToken,
        refreshToken: user.refreshToken,
      })
    } catch (error) {
      console.error('Failed to refresh token:', error)
      useAuthStore.getState().logout()
    }
  }

  onIdTokenChanged(auth, async (user) => {
    if (user) {
      await refreshAuthToken(user)
      getUserData(user)
    } else {
      useAuthStore.getState().logout()
    }
  })

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await refreshAuthToken(user)
      getUserData(user)
    } else {
      useAuthStore.getState().logout()
    }
  })
}

export { initializeFirebase, auth }
export default app
