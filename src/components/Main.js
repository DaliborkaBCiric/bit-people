import UserCard from "./UserCard";
import User from "./User";

function Main(props) {

	return (
		<div className="container">
			{props.view === 'grid' ?
				<div className="cards">
					{props.users.results?.map((user, index) => (
						<div className="card" key={index}>
							<UserCard key={index} user={user} />
						</div>
					))}
				</div>
				:
				<div>
					{props.users.results?.map((user, index) => (
						<User key={index} user={user} />
					))}
				</div>
			}
		</div>
	);
}

export default Main;