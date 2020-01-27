import React from 'react'

export default class weatherForm extends React.Component {
    componentDidMount(){
      this.props.loadweather(this.props.lat, this.props.lon)
    }
    render(){
     
        // get max and min deg
      const maxAndmin = (max, min) =>{
        return ( 
          <h3 className= 'py-4 '>
            <span className= 'mx-3'>{max}&deg;</span>
            <span className= ' mx-3 '>{min}&deg;</span>
          </h3>
        )
      }
        return(
            <div >
             <div className='container py-4 text-center ' style={{position: 'relative' , maxWidth: '70%'}}>
             
             <div className='card py-4 mx-0 mx-md-5' id='card'>
                
             <h2 className='pt-4'> {this.props.city}</h2>
           
             <i  className = { this.props.icon + ' display-1 py-4'}></i>
             
             <h3 className='py-3 '>{this.props.main}</h3>
 
             <h3>{this.props.celsuis}&deg;</h3>
 
            {maxAndmin(this.props.temp_max, this.props.temp_min)}  
 
             <h3 className = 'mb-5'>{this.props.description}</h3> 
             </div>
 
             </div>
            </div>
        )
    }
}