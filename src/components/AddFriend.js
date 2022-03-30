import React from 'react';

function AddFriend () {
    return (        
    <div>
        <h1>ADD FRIEND</h1>
        <form>
            <div>
                <label htmlFor="username">FRIEND NAME</label>
                </div><div>
                <input id="username" />
            </div>
            <div>
                <label htmlFor="age">FRIEND AGE</label>
                </div><div>
                <input id="age" />
            </div>
            <div>
                <label htmlFor="email">FRIEND EMAIL</label>
                </div><div>
                <input id="email" />
            </div>
            <button>Submit</button>
        </form>
    </div>)
  }

export default AddFriend;