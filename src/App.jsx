import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    subscribe: false,
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      age: '',
      gender: '',
      subscribe: false,
      comments: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form in React</h1>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          required
          onChange={handleChange}
          value={formData.name}
        >
        </input>

        <br></br>

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          required
          onChange={handleChange}
        >
        </input>

        <br></br>

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          required
          onChange={handleChange}
        >
        </input>

        <br></br>

        <label htmlFor='age'>Age:</label>
        <input
          type='number'
          id='age'
          name='age'
          value={formData.age}
          required
          onChange={handleChange}
        >
        </input>

        <br></br>

        <label >Gender:</label>
        <input
          type='radio'
          id='male'
          name='gender'
          value='male'
          checked={formData.gender === 'male'}
          required
          onChange={handleChange}
        >
        </input>
        <label htmlFor='male'>Male:</label>
        <input
          type='radio'
          id='female'
          name='gender'
          value='female'
          checked={formData.gender === 'female'}
          required
          onChange={handleChange}
        >
        </input>
        <label htmlFor='female'>Female:</label>

        <br></br>

        <label htmlFor='comments'>Comments:</label>
        <textarea
          id='comments'
          name='comments'
          value={formData.comments}
          required
          onChange={handleChange}
        >
        </textarea>

        <br></br>

        <label htmlFor='subscribe'>Subscribe:</label>
        <input
          type='checkbox'
          id='subscribe'
          name='subscribe'
          required
          onChange={handleChange}
          checked={formData.subscribe}
        >
        </input>

        <br></br>

        <button type='submit'>Submit</button>
        <button type='reset' onClick={handleReset}>Reset</button>

      </form>
    </>
  )
}

export default App
