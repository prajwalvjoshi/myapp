import React, { useState } from 'react'

function Form() {
  const [name, setName ]= useState("");
  const [Email, setEmail]= useState("");
  const [Usn, setUsn]= useState("");
  const [Ph, setPh]= useState("");
  const [Branch, setBranch]= useState("");
  const [Sem, setSem]= useState("");
  const handleSubmit = (e) => {
    console.log('hhhh');
    e.preventDefault();
    const data = {
      name:name,
      Email:Email,
      Usn:Usn,
      Ph:Ph,
      Branch:Branch,
      Sem:Sem  
    }
    console.log(data)
  };
  return(
  
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="student name" onChange={(e)=> setName(e.target.value)}/>
        <input type="Email" value={Email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
        <input type="Usn" value={Usn} placeholder="Usn" onChange={(e)=> setUsn(e.target.value)}/>
        <input type="Ph" value={Ph} placeholder="Ph" onChange={(e)=> setPh(e.target.value)}/>
        <input type="Branch" value={Branch} placeholder="Branch" onChange={(e)=> setBranch(e.target.value)}/>
        <input type="Sem" value={Sem} placeholder="Sem" onChange={(e)=> setSem(e.target.value)}/>
        <button >prajwal</button>
      </form>
      <p>{name}</p>
      <p>{Email}</p>
      <p>{Usn}</p>
      <p>{Ph}</p>
      <p>{Branch}</p>
      <p>{Sem}</p>

    </div>
  )
}

export default Form