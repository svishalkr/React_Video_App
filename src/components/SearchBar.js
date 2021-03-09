import React from 'react';

class Searchbar extends React.Component {
      
      state = {term: ''};

      onInputChange = (event) => {
        this.setState({term: event.target.value });
        
        };
       onFormSubmit = (event) => {
           event.preventDefault();

           this.props.onFormSubmit(this.state.term);
       }
    

    render(){
        return (
        <div className=" search bar ui segment">
           <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                   <div style  = {{paddingBottom:'15px', color:'#FF0000'}}>
                   <label><h2><i class="video icon"></i> Videoplex</h2></label>
                   </div>
                   <input
                     type="text"
                     value={this.state.term}
                     onChange={this.onInputChange}
                     placeholder="Search Videos...."
                    />
               </div>
           </form>
        </div>
        );
    }
}

export default Searchbar