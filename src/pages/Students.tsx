import { useState } from "react";

function Students() {
  const [view, setView] = useState('students');

  const students = [
    { name: 'Alice', skills: ['Math', 'Science'] },
    { name: 'Bob', skills: ['English', 'History'] },
    { name: 'Charlie', skills: ['Programming', 'Design'] },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-4xl text-white font-bold mb-6">Students</h1>
      <div className="flex justify-between items-center mb-6">
        <button
          className={`px-4 py-2 rounded ${
            view === 'students' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => setView('students')}
        >
          Students
        </button>
        <button
          className={`px-4 py-2 rounded ${
            view === 'tutors' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => setView('tutors')}
        >
          Tutors
        </button>
      </div>
      {view === 'students' && (
        <div className="space-y-4">
          {students.map((student, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded">
              <div>
                <h2 className="text-xl text-white font-semibold">{student.name}</h2>
                <div className="flex space-x-2 mt-2">
                  {student.skills.map((skill, idx) => (
                    <span key={idx} className="bg-blue-600 text-white text-sm px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Message</button>
            </div>
          ))}
        </div>
      )}
      {view === 'tutors' && (
        <div className="text-gray-400 text-center">
          <p>Tutors view is under construction.</p>
        </div>
      )}
    </div>
  );
}

export default Students;