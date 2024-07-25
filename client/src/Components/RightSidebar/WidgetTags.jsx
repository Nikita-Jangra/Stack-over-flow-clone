import React from 'react'

const WidgetTags = () => {
    const tags=['c','css','Express','Firebase','Html','mern','Mongodb','Mysql','reactjs','java','Python','nextjs','nodejs','php']
  return (
    <div className='widget-tags'>
        <h3>Watched Tags</h3>
         <div className='widget-tags-div'>
             {
                tags.map((tag)=>
                    <p key={tag}>{tag}</p>
                )
             }
         </div>
    </div>
  )
}

export default WidgetTags
