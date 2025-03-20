import { useState } from "react";
 
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
 
  return (
<div>
      {step === 1 && (
<>
<h2>Step 1: Personal Info</h2>
<input name="name" placeholder="Name" onChange={handleChange} />
<input name="email" placeholder="Email" onChange={handleChange} />
<button onClick={nextStep}>Next</button>
</>
      )}
      {step === 2 && (
<>
<h2>Step 2: Address</h2>
<input name="address" placeholder="Address" onChange={handleChange} />
<input name="city" placeholder="City" onChange={handleChange} />
<button onClick={prevStep}>Back</button>
<button onClick={nextStep}>Next</button>
</>
      )}
      {step === 3 && (
<>
<h2>Review & Submit</h2>
<pre>{JSON.stringify(formData, null, 2)}</pre>
<button onClick={prevStep}>Back</button>
<button onClick={() => alert("Form submitted!")}>Submit</button>
</>
      )}
</div>
  );
}
 
export default MultiStepForm;