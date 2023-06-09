import React, { useReducer, useState } from 'react';
import './App.css';

//TUTORIAL: https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react


const output_text = "You might like to read the following:\n\nThe making of Pride and Prejudice\nSusie Conklin\n\nMy Sister's Keeper\nJodi Picoult\n\nThe Diamond Age\nNeal Stephenson\n\nThe new rulers of the world\nJohn Pilger\n\nRoberto Rossellini: Magician of the Real\nDavid Forgacs \n\n\nSource: https://www.readgeek.com"

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      book1: '',
      book2: '',
      book3: '',
      book4: '',
      book5: '',
    }
  }

 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {count:100});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 10000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div className="wrapper">
      <h1>Book Recommender System</h1>
      {submitting &&
        <div className='display-linebreak'>
          {output_text}

          {/* You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul> */}
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Book 1</p>
            <input name="book1" onChange={handleChange} value={formData.book1 || ''}/>
            <p>Book 2</p>
            <input name="book2" onChange={handleChange} value={formData.book2 || ''}/>
            <p>Book 3</p>
            <input name="book3" onChange={handleChange} value={formData.book3 || ''}/>
            <p>Book 4</p>
            <input name="book4" onChange={handleChange} value={formData.book4 || ''}/>
            <p>Book 5</p>
            <input name="book5" onChange={handleChange} value={formData.book5 || ''}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;