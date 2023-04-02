import RefreshIcon from '@mui/icons-material/Refresh';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

const Header = (props) => {
  return (
    <div className="nav">
      <div className="container header">
        <div className="left">
          <h2 className="logo">Bit Persons</h2>
        </div>
        <div className="right">
          <div className="logo">
            <RefreshIcon onClick={() => props.fetchUsers()}/>
            {props.view === 'list' ?
              <ViewModuleIcon onClick={() => props.changeView("grid")} />
              :
              <ViewListIcon onClick={() => props.changeView("list")} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;