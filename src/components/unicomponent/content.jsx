import React from 'react'
import Content1 from './content1.jsx'
import culture from '../../assets/culture.png'
import event from '../../assets/event.png'
import environment from '../../assets/environment.png'
const Content = () => {
  return (
    <div>
      <Content1 
        title="Our Village Culture"
        content="Lalgarh Jattan has a rich cultural heritage full of traditions, music, and vibrant festivals."
        imageUrl={culture}
        reverse={false}
        className="responsive-image"
      />
      <Content1
       title="Spacial events"
       content="Lalgarh Jattan hosts various events throughout the year, showcasing local art, music, and cuisine."
       imageUrl={event}
       reverse={!false}
       className="responsive-image"
      />
      <Content1
       title="Environment"
       content="The village is surrounded by beautiful landscapes, with a focus on sustainable practices and environmental conservation."
       imageUrl={environment}
       reverse={false}
       className="responsive-image"
      />

    </div>
  )
}

export default Content
