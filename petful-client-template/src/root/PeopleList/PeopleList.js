import React, { Component } from 'react'
import DataApiService from '../../Services/data-api-service'
import './PeopleList.css'

export default class PeopleList extends Component {
    state={
        clicked: false,
        newPerson:null,
    }

    handleclicked=(event)=>{
        event.preventDefault();
        this.setState({
            clicked:true
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
        })

        
    }

    generatePeopleJSX(person, index) {
        console.log(person)
        return (
            <div key={index} className='People-List-item'>{index + 1}. {person}</div>
        )
    }

    render() {
        return (
            <div id='People-List'>
                <h2>Current Adopter Queue</h2>
                {Object.values(this.props.people).map((x, index) => this.generatePeopleJSX(x, index))}
                <button onClick={this.handleclicked}> Join</button>
                {this.state.clicked 
                    ? <form onSubmit={this.addPerson}>
                            <label htmlFor='newPerson'>Name:</label>
                            <input type='text' name='newPerson' id='newPerson'></input>
                            <button type='submit'>submit</button>
                        </form>
                    : <div></div>
                }
            </div>
        )
    }
}
