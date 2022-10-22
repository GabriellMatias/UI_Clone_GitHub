import { ProfileDataContainer } from "./style"

interface ProfileDataProps{
  
  username:string
  name:string
  avatarUrl: string
  followers:number
  following:number
  company?:string
  location?:string
  email?:string
  blog?:string

}

export function ProfileData(props:ProfileDataProps){
  return(
    <ProfileDataContainer>
      
    </ProfileDataContainer>
  )
}