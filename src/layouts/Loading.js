import React from 'react'
import loading from './loader.gif'
export default function Loading() {
  return (
    <div>
      <img src = {loading}
      alt="Loading"
      style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
      />
    </div>
  )
}
