import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import User from "./User";
import Search from "./Search";
import NoResulst from "./NoResults";


function Main(props) {

	const [state, setstate] = useState({
		query: '',
		users: props.users
	})

	useEffect(() => {
		setstate(state => ({ ...state, users: props.users, query: '' }));
	}, [props.users]);

	const handleChange = (e) => {
		e = e.split(" ")
		e = e.filter(e1 => e1.trim().length > 0);


		const firstName = props.users.filter(user => {
			if (e === "") return props.users
			return e.some(ew => user.name.first.toLowerCase().includes(ew.toLowerCase()));
		})

		const user_array = firstName && firstName.length > 0 ? firstName : props.users

		const lastName = user_array.filter(user => {
			if (e === "") return props.users
			return e.some(ew => user.name.last.toLowerCase().includes(ew.toLowerCase()));
		})

		const results = [...firstName, ...lastName]
		let uniqueUsers = results.filter((element, index) => {
			return results.indexOf(element) === index;
		});

		setstate({
			query: e,
			users: e.length > 0 ? uniqueUsers : props.users
		})
	}
	return (
		<div className="container">

			<Search value={state.query} handleChange={handleChange} />
			{state.users && state.users.length > 0 ?
				props.view === 'grid' ?
					<div className="cards">
						{state.users.map((user, index) => (
							<div className="card" key={index}>
								<UserCard key={index} user={user} />
							</div>
						))}
					</div>
					:
					<div>
						{state.users.map((user, index) => (
							<User key={index} user={user} />
						))}
					</div>
				:
				<NoResulst />
			}
		</div>
	);
}

export default Main;