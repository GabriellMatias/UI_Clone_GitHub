import { Link } from "react-router-dom";
import { FooterRepoCard, ForkIcon, HeaderRepoCard, RepoIcon, ReporCardContainer, StarIcon } from "./style";


interface RepoCardProps{
  key:number
  username:string
  reporname:string
  desciption?:string
  language?:string
  stars:number 
  forks:number
}

export function RepoCard(props:RepoCardProps){
  const languageClass = props.language? props.language.toLowerCase():"another"

  return(
    <ReporCardContainer> 
      <HeaderRepoCard>
        <header>
          <RepoIcon/>
          <Link to={`/${props.username}/${props.reporname}`}>{props.reporname}</Link>
        </header>
        <p>{props.desciption}</p>
      </HeaderRepoCard>



      <FooterRepoCard>
        <ul>
          <li>
            <div className={`language ${languageClass}`}/>
            <span>{props.language}</span>
          </li>
          <li>
            <StarIcon/>
            <span>{props.stars}</span>
          </li>
          <li>
            <ForkIcon/>
          </li>
        </ul>
      </FooterRepoCard>
    </ReporCardContainer>
  )
}