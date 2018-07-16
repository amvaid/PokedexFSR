import React from 'react';

var Search = (props) => (
    <form>
      <input type="text" onChange={props.onChange} placeholder="Enter Pokemon Name"/>
      <input type="submit" value="Search Pokemon" onClick={props.onClick}/>
    </form>
)

export default Search;