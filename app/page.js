export default function Dashboard() {
  return (
    <div className="p-6 md:p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500 text-sm">Total Employees</p>
          <p className="text-3xl font-bold mt-2">40</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500 text-sm">Present Today</p>
          <p className="text-3xl font-bold mt-2">47</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500 text-sm">On Leave</p>
          <p className="text-3xl font-bold mt-2">10</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500 text-sm">Departments</p>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
      </div>

      {/* Recent Employees */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Employees</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b bg-gray-100 text-left text-sm font-semibold">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Department</th>
                <th className="p-4">Joined</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Amal Mbark</td>
                <td className="p-4">amal@example.com</td>
                <td className="p-4">HR</td>
                <td className="p-4">2025-02-10</td>
              </tr>

              {/* row 2 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Ahmed Ben Ali</td>
                <td className="p-4">ahmed@example.com</td>
                <td className="p-4">IT</td>
                <td className="p-4">2025-01-24</td>
              </tr>

              {/* row 3 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Sara Ben Said</td>
                <td className="p-4">sara@example.com</td>
                <td className="p-4">Finance</td>
                <td className="p-4">2025--03-05</td>
              </tr>
                 {/* row 3 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">amal </td>
                <td className="p-4">amal@gamil.com</td>
                <td className="p-4">Finance</td>
                <td className="p-4">2025-03-05</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
