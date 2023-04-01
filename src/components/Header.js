import RefreshIcon from '@mui/icons-material/Refresh';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const Header = () => {
  return (
    <div className="nav">
      <div className="container header">
        <div className="left">
            <h2 className="logo">Bit Persons</h2>
        </div>
        <div className="right">
            <div className="logo">
                <RefreshIcon />
                <ViewModuleIcon />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;