const UserCard = ({ user }) => {
  return (
    <div className="bg-card text-card-foreground rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-xs w-full">
      <div className="bg-gradient-to-r from-primary/80 to-primary p-6 flex justify-center">
        <img
          src={user.image || "/placeholder.svg"}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-24 h-24 rounded-full border-4 border-background object-cover shadow-md"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-tight">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-muted-foreground text-sm">
            {user.company.title} at {user.company.name}
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <div className="flex items-center text-sm">
            <span className="text-primary mr-2">📧</span>
            <span className="truncate">{user.email}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-primary mr-2">📞</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-primary mr-2">📍</span>
            <span>
              {user.address.city}, {user.address.state}
            </span>
          </div>
        </div>

        <div className="pt-2 flex justify-center">
          <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
            {user.role.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
