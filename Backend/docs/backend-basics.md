# Important basics

## Dot notation (.) is used in MongoDB queries to access or modify nested fields inside an object. 
**EG: here in findOne.** 
   **const user = await User.findOne({**
   **email:email.toLowerCase()**
   **});**