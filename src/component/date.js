import React from 'react'

export default class date extends React.Component {
    render(){

         // get date 
       let date = Date.now()
       //get time
       let timeformate = new Date(date).toLocaleTimeString()
       //get date
       let dateformate = new Date(date).toDateString()

        return(
            <div>
              <h3 className='text-white fixed-bottom mx-5 mb-5'>{dateformate}</h3>
              
              <h3 className='text-white fixed-bottom mx-5 mb-3'>{timeformate}</h3>
            </div>
        )
    }
}