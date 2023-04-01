function User({ user }) {
    let email = user.email.split('@')[0]
    let domein = user.email.split('@')[1]
    return (
      <div className="user">
        <p>{email.substring(0,3) + "..." + email.slice(-3)}.{domein}</p>
      </div>
    );
  }
  
export default UserEmail;