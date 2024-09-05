import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const ProfilePage = () => {
  return (
    <div>
      <UserProfile routing="hash" />
    </div>
  )
}

export default ProfilePage
