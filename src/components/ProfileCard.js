import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'





const CardList=(props) =>(
  <div>
    {props.profiles.map(profile =><ProfileCard {...profile}/>)}
  </div>
);

class ProfileCard extends React.Component{
render(){
const profile=this.props;
return(
  <CardDeck >
    <Card  >
    <Card.Img variant="bottom" src={profile.avatar_url}/>
  </Card>
  <Card className="bg-dark text-white text-center" >
    <Card.Body >
    <Card.Header>GITHUB USER DETAILS</Card.Header>
      <Card.Title> NAME :- {profile.name}</Card.Title>
      <Card.Subtitle>
        COMPANY :-{profile.company}
      </Card.Subtitle>
      <Card.Text>
        LOCATION :-{profile.location}
      </Card.Text>
      <Card.Text>
        BIO :-{profile.bio}
      </Card.Text>
      <Card.Text>
        REPOS :-{profile.public_repos}
      </Card.Text>
      <Card.Text>
        FOLLOWERS :-{profile.followers}
      </Card.Text>
      <Card.Link href={profile.html_url}>VIEW ON GITHUB</Card.Link>
      <Card.Link href={profile.blog}>VISIT PORTFOLIO/BLOG</Card.Link>
    </Card.Body>
  </Card>
  </CardDeck>
);

}

}
export default CardList;
