function Messages() {
  const contacts = [
    { name: "Alice J", lastMessaged: "just now" },
    { name: "Terrance Z", lastMessaged: "1 hour ago" },
    { name: "Charlie P", lastMessaged: "3 days ago" },
    { name: "Steve S", lastMessaged: "4 days ago" },
  ];
  const messages = [
    { sender: "Daniel J", content: "Hi John! Are you currently looking for an English tutor at Bayview?" },
    { sender: "Guney P", content: "Hey, I have a question about the homework I recieved" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-4xl text-white font-bold mb-6">Messages</h1>

      <div className="grid grid-cols-4 gap-6">
        {/* Contacts Sidebar */}
        <aside className="col-span-1 bg-gray-800 p-4 rounded-lg shadow-lg overflow-y-auto">
          <h2 className="text-2xl text-white font-semibold mb-4">Direct Messages</h2>
          <ul className="space-y-2">
            {contacts.map((contact, index) => (
              <li
                key={index}
                className="p-2 rounded hover:bg-gray-500 cursor-pointer text-white"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{contact.name}</span>
                  <span className="text-sm text-gray-400">{contact.lastMessaged}</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Inbox */}
        <main className="col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-white">Message Requests</h2>
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded shadow flex justify-between items-start">
                <div>
                  <p className="font-medium text-blue-400">{msg.sender}:</p>
                  <p className="text-white">{msg.content}</p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    aria-label="Accept"
                    className="text-green-600 hover:text-green-800 text-xl bg-green-900 hover:bg-green-600 rounded-full p-2"
                  >
                    ✓
                  </button>
                  <button
                    aria-label="Decline"
                    className="text-red-600 hover:text-red-800 text-xl bg-red-900 hover:bg-red-600 rounded-full p-2"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Messages;
