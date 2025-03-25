import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../components/Card";

const UserComponentWithPagination = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const usersPerPage = 9;
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async (pageNum) => {
    const skip = pageNum * usersPerPage;
    const response = await fetch(
      `https://dummyjson.com/users?limit=${usersPerPage}&skip=${skip}`
    );
    const data = await response.json();

    setUsers(data.users);
    setTotalPages(Math.ceil(data.total / usersPerPage));
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Users Data</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"flex space-x-3"}
          pageClassName={
            "px-3 py-2 border rounded bg-gray-200 hover:bg-gray-300"
          }
          activeClassName={"bg-blue-500 text-white"}
          previousClassName={
            "px-3 py-2 border rounded bg-gray-500 text-white hover:bg-gray-600 cursor-pointer"
          }
          nextClassName={
            "px-3 py-2 border rounded bg-gray-500 text-white hover:bg-gray-600 cursor-pointer"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
      </div>
    </div>
  );
};

export default UserComponentWithPagination;
