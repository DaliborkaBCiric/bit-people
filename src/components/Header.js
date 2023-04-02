import { Link, useLocation } from 'react-router-dom';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

const Header = (props) => {
  const location = useLocation();

  return (
    <div className="nav">
      <div className="container header">
        <div className="left">
          <h2 className="logo"><Link to="/">Bit Persons</Link></h2>
        </div>
        <ul className="right">
          {location.pathname.substring(1) !== 'about' ?
            <>
              <li><Link to="/about">About</Link></li>
              <li className="logo">
                <RefreshIcon onClick={() => props.fetchUsers()} />
              </li>
              <li>
                {props.view === 'list' ?
                  <ViewModuleIcon onClick={() => props.changeView("grid")} />
                  :
                  <ViewListIcon onClick={() => props.changeView("list")} />
                }
              </li>
            </>
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Header;