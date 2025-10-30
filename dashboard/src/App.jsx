import React from 'react'

const App = () => {
  return (
   <>
      <Routes>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
