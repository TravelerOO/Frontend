import React from 'react'
import { useState } from 'react'

function useInput() {

    const [value, setValue] = useState('')

    const handler = (e) => {setValue(e.target.value)}

    const reset = () => {
      setValue('')
    }

  return [value, handler, reset]
}

export default useInput