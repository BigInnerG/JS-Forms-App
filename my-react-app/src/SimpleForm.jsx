import { useState } from "react";
 
function SimpleForm() {
  const [name, setName] = useState("");
 
  const handleChange = (event) => {
    setName(event.target.value);
  };
 
  return (
<div>
<h2>Simple Form</h2>
<input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
<p>Your name is: {name}</p>
</div>
  );
}
 
export default SimpleForm;