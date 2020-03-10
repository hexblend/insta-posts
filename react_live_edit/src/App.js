import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [content, setContent] = useState({
    title: 'Hello world',
    section1: {
      title: 'Section',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend dapibus mauris eget consequat. Nam et erat vehicula, bibendum mauris nec, convallis ligula. Cras lacus est, malesuada sit amet quam quis, gravida tincidunt est. Maecenas facilisis felis a ligula varius aliquet. Nulla consectetur malesuada ex. Nunc et pharetra magna. Curabitur magna justo, lobortis id ullamcorper non, varius id arcu. Integer dictum lorem id velit egestas elementum. Quisque bibendum lectus sit amet massa mollis tempus. Cras efficitur diam vel dolor venenatis, ut egestas libero pretium. Quisque at mi faucibus, consectetur massa non, fringilla sem. Pellentesque eu velit dignissim, pharetra sem ut, laoreet ligula.'
    }
  });
  const [editing, setEditing] = useState(false);






























  return (
    <div className="App">
      <div className="App-Header">
        {/* Left-side */}
        <div></div>
        {/* Live Edit Article Title */}
        {!editing
          ? <h1>{content.title}</h1>
          : <input
            type="text"
            value={content.title}
            onChange={e => setContent({ ...content, title: e.target.value })}
            className="liveEditH1"
          />
        }
        {/* Right-side */}
        <p className="editBtn" onClick={() => setEditing(!editing)}>
          {!editing ? 'Edit' : 'Publish'}
          <FontAwesomeIcon icon={faEdit} className="icon" />
        </p>
      </div>









      <div className="App-Body">
        <div>
          {/* Live Edit Section Title */}
          {!editing
            ? <h3>{content.section1.title}</h3>
            : <input
              type="text"
              value={content.section1.title}
              onChange={e =>
                setContent({ ...content, section1: { ...content.section1, title: e.target.value } })}
              className="liveEditH3"
            />
          }
          {/* Live Edit Section Content */}
          {!editing
            ? <p>{content.section1.content}</p>
            : <textarea
              value={content.section1.content}
              onChange={e => setContent(
                {
                  ...content,
                  section1:
                  {
                    ...content.section1,
                    content: e.target.value
                  }
                })}
              className="liveEditP"
            ></textarea>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
