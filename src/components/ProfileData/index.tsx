import { Avatar, BlogIcon, Column, CompanyIcon, EmailIcon, Flex, LocationIcon, PeopleIcon, ProfileDataContainer, Row } from "./style"

interface ProfileDataProps{
  
  username:string
  name:string
  avatarUrl: string
  followers:number
  following:number
  company?:string
  locationgit?:string
  email?:string
  blog?:string

}

export function ProfileData(props:ProfileDataProps){
  return(
    <ProfileDataContainer>
      <Flex>
        <Avatar src={props.avatarUrl} alt="Profile picture"/>
        <div>
          <h1>{props.name}</h1>
          <h2>{props.username}</h2>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon/>
          <b>{props.followers}</b>
          <span>Followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{props.following}</b>
          <span>Following</span>
        </li>
      </Row>

      <Column>
        {props.company&&(
          <li>
            <CompanyIcon/>
            <span>{props.company}</span>
          </li>
        )}
        {props.locationgit&&(
          <li>
            <LocationIcon/>
            <span>{props.locationgit}</span>
          </li>
        )}
        {props.email&&(
          <li>
            <EmailIcon/>
            <span>{props.email}</span>
          </li>
        )}
        {props.blog&&(
          <li>
            <BlogIcon/>
            <span>{props.blog}</span>
          </li>
        )}
        
      </Column>
      
    </ProfileDataContainer>
  )
}