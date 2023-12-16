import React from "react";
import ".Main.css"

function CreatePost({clicked}) {
    return (
        <div className='post'>
            <h2>Create Country</h2>
            <label for="name">Country name</label>
            <input
             type="text"
             id="name"
             placeholder="Name"
             onChange={(e) => setName (e.target.value)}
              />
              <label for="url">Image</label>
              <input 
              type="url" 
              id="url"
              placeholder="image url"
              onChange={(e) =>setUrl (e.target.value)}
              />
              <button onClick={handleCreate}></button>
        </div>
    )
}
export default CreatePost