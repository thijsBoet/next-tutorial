const User = ({ user }) => {
	return (
		<>
			<h3>{user.name}</h3>
			<div>{user.username}</div>
			<div>{user.email}</div>
			<br />
			<div>
				{user.address.suite} {user.address.street}
			</div>
			<div>{user.address.city} </div>
			<div>{user.address.zipcode} </div>
			<br />
			<div>{user.company.name} </div>
			<div>{user.phone} </div>
			<div>{user.website} </div>
			<hr />
		</>
	);
};

export default User;
