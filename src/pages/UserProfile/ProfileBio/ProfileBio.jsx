import React from 'react'
import { useSelector } from 'react-redux'
const ProfileBio = ({currentProfile}) => {
  const currentUser = useSelector((state) => state.currentReducer)
  return (
    <div>
    <div>
      {
                    currentProfile?.tags.length !== 0 ? (
                        <>
                            {/* <Location/> */}
                            <h4>Tags watched</h4>
                            {
                                currentProfile?.tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))
                            }
                        </>
                    ) : (
                        <p>0 tags watched</p>
                    )
                }
                </div>
                <div>
                {
                    currentProfile?.about ? (
                        <>
                            <h4>About</h4>
                            <p>{currentProfile?.about}</p>
                        </>
                    ) : (
                        <p>No bio found</p>
                    )
                }
                </div>
    </div>
  )
}

export default ProfileBio