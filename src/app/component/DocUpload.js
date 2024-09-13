'use client'

import React from 'react'

const DocUpload = () => {
    const handlesubmit = (e) => {
        // e.preventDefault();
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        console.log(formData);
    }

  return (
    <> 
    <form 
        onClick={handlesubmit}
    >
        <input type="file" name="file" />
    </form>

    </>
  )
}

export default DocUpload