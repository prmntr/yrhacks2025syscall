function Messages() {
  const contacts = ["Alice", "Bob", "Charlie", "David"];
  const messages = [
    { sender: "Janice", content: "Hey, are you looking for a math tutor at Bayview High?" },
    { sender: "Guney", content: "Just a reminder for your session tomorrow at 5:30pm!" },
  ];

  return (
    <div className="flex h-screen rounded-xl bg-gray-900 shadow-lg overflow-hidden m-5">
      {/* Contacts Sidebar */}
      <aside className="w-1/4 bg-gray-800 p-4 border-r overflow-y-auto">
        <h1 className="text-2xl text-white font-semibold mb-4 ml-1">Contacts</h1>
        <ul className="space-y-2">
          {contacts.map((contact, index) => (
            <li
              key={index}
              className="p-2 rounded hover:bg-gray-500 cursor-pointer text-white"
            >
              {contact}
            </li>
          ))}
        </ul>
      </aside>

      {/* Inbox */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-white">Message Requests</h2>
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className="bg-white p-4 rounded shadow flex justify-between items-start">
              <div>
                <p className="font-medium text-blue-600">{msg.sender}:</p>
                <p>{msg.content}</p>
              </div>
              <div className="flex space-x-2 ml-4">
                <button
                  aria-label="Accept"
                  className="text-green-600 hover:text-green-800 text-xl"
                >
                  ✓
                </button>
                <button
                  aria-label="Decline"
                  className="text-red-600 hover:text-red-800 text-xl"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Messages;
