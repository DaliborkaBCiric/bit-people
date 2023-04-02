import SearchIcon from '@mui/icons-material/Search';

const Search = (props) => {
    return(
        <div className='search-bar'>
            <SearchIcon />
            <input type="text" placeholder="Search users" onChange={(e) => props.handleChange(e.target.value)}/>
        </div>
    )
}

export default Search