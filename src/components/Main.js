import UserCard from "./UserCard";
import User from "./User";

function Main(props) {

  return (
    <div className="container">
        <div className="cards">
        {props.users.results?.map((user, index) => (
            <div className="card" key={index}>
							{props.view === 'grid' ? 
                <UserCard key={index} user={user} />
								:
								<User key={index} user={user} />
							}
            </div>
        ))}
      </div>
    </div>
  );
}

export default Main;