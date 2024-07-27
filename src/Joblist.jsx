import React from 'react'

export const Joblist = () => {
  return (
    <div>
        <label>Job position</label>
        <input type='text' name='job' placeholder='Enter your job position' />

        <button>Search</button>

        <ol>
            <li>job1</li><button>apply</button><br />
            <li>job2</li><button>apply</button><br />
        </ol>
    </div>
  )
}
