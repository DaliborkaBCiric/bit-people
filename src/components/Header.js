import RefreshIcon from '@mui/icons-material/Refresh';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="nav">
        <div className="container header">
          <div className="left">
            <h2 className="logo">Bit Persons</h2>
          </div>
          <div className="right">
            <div className="logo">
              <RefreshIcon />
              {this.props.view === 'list' ?
                <ViewModuleIcon onClick={() => this.props.changeView(this.state)} />
                :
                <ViewListIcon onClick={() => this.props.changeView(this.state)} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;