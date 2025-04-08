function Dashboard() {
  return (
    <>
      <h1 className="font-bold m-5 text-4xl">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Upcoming Classes</h2>
          <p className="text-gray-600">View your scheduled lessons and prepare ahead.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <p className="text-gray-600">Check what you've completed recently.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Resources</h2>
          <p className="text-gray-600">Access study materials and helpful links.</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;