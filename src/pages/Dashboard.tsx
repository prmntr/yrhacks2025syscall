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
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">April 2025</h2>
          <div className="space-x-2">
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Prev</button>
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Next</button>
          </div>
        </div>

        <div className="grid grid-cols-7 text-center font-medium text-gray-600">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="grid grid-cols-7 text-center mt-2 gap-2 text-sm">
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div className="py-2 rounded bg-blue-100 font-semibold text-blue-800">1</div>
          <div className="py-2 rounded hover:bg-gray-200">2</div>
          <div className="py-2 rounded hover:bg-gray-200">3</div>
          <div className="py-2 rounded hover:bg-gray-200">4</div>
          <div className="py-2 rounded hover:bg-gray-200">5</div>
          <div className="py-2 rounded hover:bg-gray-200">6</div>
          <div className="py-2 rounded hover:bg-gray-200">7</div>
          <div className="py-2 rounded hover:bg-gray-200">8</div>
          <div className="py-2 rounded hover:bg-gray-200">9</div>
          <div className="py-2 rounded hover:bg-gray-200">10</div>
          <div className="py-2 rounded hover:bg-gray-200">11</div>
          <div className="py-2 rounded hover:bg-gray-200">12</div>
          <div className="py-2 rounded hover:bg-gray-200">13</div>
          <div className="py-2 rounded hover:bg-gray-200">14</div>
          <div className="py-2 rounded hover:bg-gray-200">15</div>
          <div className="py-2 rounded hover:bg-gray-200">16</div>
          <div className="py-2 rounded hover:bg-gray-200">17</div>
          <div className="py-2 rounded hover:bg-gray-200">18</div>
          <div className="py-2 rounded hover:bg-gray-200">19</div>
          <div className="py-2 rounded hover:bg-gray-200">20</div>
          <div className="py-2 rounded hover:bg-gray-200">21</div>
          <div className="py-2 rounded hover:bg-gray-200">22</div>
          <div className="py-2 rounded hover:bg-gray-200">23</div>
          <div className="py-2 rounded hover:bg-gray-200">24</div>
          <div className="py-2 rounded hover:bg-gray-200">25</div>
          <div className="py-2 rounded hover:bg-gray-200">26</div>
          <div className="py-2 rounded hover:bg-gray-200">27</div>
          <div className="py-2 rounded hover:bg-gray-200">28</div>
          <div className="py-2 rounded hover:bg-gray-200">29</div>
          <div className="py-2 rounded hover:bg-gray-200">30</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;