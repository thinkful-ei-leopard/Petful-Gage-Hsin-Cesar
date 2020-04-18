import React from 'react';
import PeopleList from '../PeopleList/PeopleList';
import Pet from '../Pet/Pet';
import DataApiService from '../../Services/data-api-service';
import './AdoptionPage.css';

export default class AdoptionPage extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      peopleData:'',
      petData:'',
      error:null,
      date: null
    } 
  }

  componentDidMount() {
    this.timerId= setInterval(
      ()=>this.tick(), 
      5000
    );

    DataApiService.getPet()
      .then(petData=> this.setState({
            petData
          })) 
      .catch(res=> this.setState({
            error:JSON.stringify(res.error)
          }))
  
    DataApiService.getPeople()
      .then(peopleData=> {
        this.setState({
          peopleData
      })
      
      }) 
      .catch(res=> this.setState({
          error:JSON.stringify(res.error)
      }))
      
  }
 
  componentWillUnmount(){
   clearInterval(this.timerId)
  
  }

  tick(){
    this.setState({
      date: new Date()
    })
    DataApiService.deletePeople()
      .then(people => DataApiService.getPeople()
      .then(peopleData=> {
        this.setState({
          peopleData
      })
      }))
  }

  createDataSuccess = (data) => {
    this.setState({
      peopleData: data
    })
  }
   
  render(){
    const { error }  = this.state;
    return (     
      <div id='Adoption-Page'>  
        {error && <p>{error}</p>}
        <Pet pet={this.state.petData}/>
        <PeopleList createDataSuccess={this.createDataSuccess} people={this.state.peopleData}/>
      </div>
    )
  }
};