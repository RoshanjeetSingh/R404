import React from 'react'
import Content1 from './content1.jsx'
// import Content2 from './content2.jsx'
// import Content3 from './content3.jsx'
const Content = () => {
  return (
    <div>
      <Content1 
        title="Our Village Culture"
        content="Lalgarh Jattan has a rich cultural heritage full of traditions, music, and vibrant festivals."
        imageUrl="../src/assets/culture.png"
        reverse={false}
        className="responsive-image"
      />
      <Content1
       title="Spacial events"
       content="Lalgarh Jattan hosts various events throughout the year, showcasing local art, music, and cuisine."
       imageUrl="../src/assets/event.png"
       reverse={!false}
       className="responsive-image"
      />
      <Content1
       title="Environment"
       content="The village is surrounded by beautiful landscapes, with a focus on sustainable practices and environmental conservation."
       imageUrl="../src/assets/environment.png"
       reverse={false}
       className="responsive-image"
      />

    </div>
  )
}

export default Content
