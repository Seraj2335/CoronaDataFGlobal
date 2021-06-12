import React, { Component } from 'react';
class ScreenApp extends Component {
    state = { 
        item:[],
        isLoading:true
     }

   async componentDidMount(){
     const response = await fetch('https://www.trackcorona.live/api/countries');

      const jsonData= await response.json();
      this.setState({
          item:jsonData.data,
          isLoading:false
        
      });
     
     
  }


    render() { 
  if(this.state.isLoading){
      return <div>Loading...</div>;
  }
     
    return(<div>
    <h1>Corona Data Stat Countrywide</h1>
      <table >
      <tr> <th>Location</th>
      <th>Latitude</th>
      <th>Longitude</th>
      <th>Confirmed</th>
      <th>Dead</th>
      <th>Recovered</th>
      <th>Updated</th></tr>
     
        
        {this.state.item.map(item=><tr margin='10px' key={item.id}>
        <td>{item.location}</td>
         <td>{item.latitude}</td>
          <td>{item.longitude}</td>
           <td>{item.confirmed}</td>
            <td>{item.dead}</td>
             <td>{item.recovered}</td>
             <td>{item.updated}</td>
        
       </tr>)}
        
             
         
         </table>
      
    </div>);
    
    }
}
 
export default ScreenApp;
