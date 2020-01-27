import React from 'react'

export default class form extends React.Component{
   
  
    render(){

        return(
            <div >
                <div className ='container'>
                   
                    <form onSubmit ={this.props.onSubmit} >
                        <div className = 'row py-3 pt-5 mx-md-0 mx-5'>
                           <div className = ' col-md-3 offset-md-2 '>
                               <input type= 'text' className='form-control' id = 'form' placeholder='city ex: london'
                                name = 'city2'
                                onChange = {this.props.onChangeCity}/>
                           </div>
                           <div className = ' col-md-3 mt-md-0 mt-2 '>
                               <input type= 'text' className='form-control ' id = 'form' placeholder='country ex: uk'
                                name = 'country'
                                onChange = {this.props.onChangeCountry}/>
                           </div>
                           <div className = 'col-md-3  mt-md-0 mt-3 text-md-left text-center'>
                           <button type= 'submit' className= 'btn btn-lg btn-danger ' id='btn-lg'>get weather</button>
                           </div>
                           
                        </div>
                        {this.props.error ? 
                    <div className='alert alert-danger text-center mx-5 mb-0 py-1'>please enter a valid data</div>: null}
                    </form>
                </div>
            </div>
        )
    }
}