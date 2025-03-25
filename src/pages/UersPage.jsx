import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchUsers = async (initial = false) => {
    const skip = initial ? 0 : page * 9;

    const response = await fetch(
      `https://dummyjson.com/users?limit=9&skip=${skip}`
    );
    const data = await response.json();

    if (data.users.length === 0) {
      setHasMore(false);
      return;
    }

    setUsers((prevUsers) =>
      initial ? data.users : [...prevUsers, ...data.users]
    );

    if (!initial) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchUsers(true);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Users Data</h1>

      <InfiniteScroll
        dataLength={users.length}
        next={() => fetchUsers(false)}
        hasMore={hasMore}
        loader={<p className="text-center mt-4">Loading more users...</p>}
        endMessage={<p className="text-center mt-4">No more users to load.</p>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default UserPage;
