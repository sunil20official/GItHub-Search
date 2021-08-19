import React , { useContext} from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

 const Search =() => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);


    const onChange = (e) => githubContext.setText(e.target.value);
    
    

    const onSubmit = (e)=> {
        e.preventDefault();  // it prevents the page from reloading on submit button 
        if(githubContext.text === ''){
            alertContext.setAlert('Please enter something','light');
        }else{
            githubContext.searchUsers(githubContext.text);
            githubContext.setText('');
        }   
    };

        return (
            <div>
                <form onSubmit ={onSubmit} className="form" >
                    <input 
                        style={{marginBottom:"20px"}}
                        type = "text" 
                        name="text" 
                        placeholder="Search users..." 
                        value = {githubContext.text} 
                        onChange = {onChange} 
                    />
                    <button 
                        type = "submit"
                        className="btn btn-block btn-light btn-round" 
                        style={{marginBottom:"1rem"}}
                    >Search
                    </button>
                </form>

                 {githubContext.users.length > 0 &&
                <button 
                    className="btn btn-light btn-block btn-round" 
                    onClick={githubContext.clearUsers}
                    style={{marginBottom:"20px"}}
                >
                    Clear
                </button>}
            </div>
        );
}

export default Search
