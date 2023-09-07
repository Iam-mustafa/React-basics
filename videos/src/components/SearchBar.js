import React from 'react';
class SearchBar extends React.Component{
    state ={ term: '',sresult:''};
    onResultChange=e=>{
        this.setState({sresult: e.target.value})
        console.log(this.state.sresult)
    }
    onInputChange=event=>{
        this.setState({term: event.target.value})
    };
    onFormSubmit=event=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term,this.state.sresult)
 
    }
    render(){
        return <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" 
                    value={this.state.term} 
                    onChange={this.onInputChange} />
                     <label>Search maxResults</label>
                    <input type="number" 
                    value={this.state.sresult} 
                    onChange={this.onResultChange} />
                     <a 
                     href="http://localhost:3000/"
                    className="ui button"
                    onClick={this.onFormSubmit}
                    >
                    Go
                    </a>
                </div>
            </form>
        </div>
    }
}
export default SearchBar;