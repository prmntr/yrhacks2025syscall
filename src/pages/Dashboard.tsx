function Dashboard() {
  return (
    <>
      <h1 className="font-bold m-5 text-4xl">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1>Upcoming Classes</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1>Upcoming Classes</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1>Upcoming Classes</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
