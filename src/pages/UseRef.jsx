import  { useEffect, useRef } from 'react'

 const UseRef = () => {
    const inputTxt = useRef(null)
    useEffect(() => {
      inputTxt.current.focus()
    })
  
    return (
      <div>
        <input type='text' />
        <input ref={inputTxt} />
      </div>
    );
}

export default useRef;


