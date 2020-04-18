import React, { Component } from 'react'
import DataApiService from '../../Services/data-api-service'
import './PeopleList.css'

export default class PeopleList extends Component {
    state={
        clicked: false,
        newPerson:'',
        confirm: false
    }

    handleclicked=(event)=>{
        event.preventDefault();
     
        this.setState({
            clicked:true
        })
    } 

    handleCancel=(event)=>{
        event.preventDefault();
     
        this.setState({
            clicked:false
        })
    } 

    addPerson=(event)=>{
        event.preventDefault();
        const {newPerson}= event.target
        DataApiService.postPeople({
            newPerson: newPerson.value
        })
        .then(data =>{
            newPerson.value='';
            this.props.createDataSuccess(data)
            this.setState({
                clicked: false,
                confirm:false
            })
        })
        
    }

    sendConfirmation=(event)=>{
        event.preventDefault();
        this.setState({
            confirm:true
        })
    }

    handleClose=(event)=>{
        event.preventDefault();
        this.setState({
            confirm:false
        })
    }

    generatePeopleJSX(person, index) {
        console.log(person)
        if(index > 4 ){
        return;
        }
        else if (index === 0  ) {
        return (
        <div  key={index}>
        <div className='People-List first'>{index + 1}. {person}</div>
        <button type='button' onClick={this.sendConfirmation}>Adopt</button>
        {this.state.confirm && 
        <div>
            <h2>Congratulation!</h2><button type='button' onClick={this.handleClose}>close</button>
        </div>}
        </div>)
        }else{
            return (
                <div key={index} className='People-List'>{index + 1}. {person}</div>
            )
        }
         
    }

    render() {
        
        return (
            <div id='People-List'>
                <h2>Current Adopter List</h2>
                
                {Object.values(this.props.people).map((x, index) => this.generatePeopleJSX(x, index))}
                
                <button className='join' onClick={this.handleclicked}> Join</button>
                {this.state.clicked 
                    ? <form onSubmit={this.addPerson}>
                            <label htmlFor='newPerson'>Your Name:</label>
                            <input type='text' name='newPerson' id='newPerson' required></input><br></br>
                            <button type='submit'>submit</button>
                            <button type='button' onClick={this.handleCancel}>cancel</button>
                        </form>
                    : <div></div>
                }

            </div>
        )
    }
}
