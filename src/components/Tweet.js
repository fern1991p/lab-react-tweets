import React from 'react'
import ProfileImage from "../components/ProfileImage"
import User from "../components/User"
import Timestamp from "../components/Timestamp"
import Message from "../components/Message"
import Actions from "../components/Actions"

 function Tweet(props) {

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">

          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />    

        </div>

        <Message message={props.tweet.message} />  
        <Actions />


      </div>

      <i class="fas fa-ellipsis-h"></i>
      
    </div>

   

  );
}


export default Tweet;
