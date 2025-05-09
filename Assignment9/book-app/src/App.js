import React, { useState } from 'react';

function App() {
  // State to store book details
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState([]);

  // Handle input change for book title
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  // Handle form submission to add the book
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      setBooks([...books, title]); // Add book to the list
      setTitle(""); // Clear input field
    }
  };

  return (
    <div className="App">
      <h1>Book List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleInputChange}
          placeholder="Enter book title"
        />
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
