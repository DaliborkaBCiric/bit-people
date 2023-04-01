import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';

function User({ user }) {
    let email = user.email.split('@')[0]
    let domein = user.email.split('@')[1]
    return (
      <div className="user">
        <li className="user-item">
          <img src={user.picture.large} alt={user.name.first}/>
          <div className="user-details">
            <p>{user.name.first.toLowerCase()} {user.name.last.toLowerCase()}</p>
            <p><EmailIcon />{email.substring(0,3) + "..." + email.slice(-3)}.{domein}</p>
            <p><CakeIcon />{new Date(user.dob.date).toLocaleDateString('sr-RS', 
              { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll(" ", "")
            }</p>
          </div>
        </li>
      </div>
    );
  }
  
export default User;