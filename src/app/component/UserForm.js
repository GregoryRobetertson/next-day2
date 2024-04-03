'use client';

const { useState } = require("react");


export default function UserForm() {
    const [username, setUsername] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        alert(`Form submitted with inputs: ${username}`);
    };

  return (
    <form onSubmit={handleSubmission}>
        <label>
            Your Username:
            <input/>
        </label>
        <button type="submit">Submit</button>
    </form>
  );
};
