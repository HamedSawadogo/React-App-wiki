import React, {useRef} from 'react';
import "../styles/form.css";
import axios from 'axios';

const Form = () => {
   const formref = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();
      const user = {
         author: formref.current.name.value,
         content: formref.current.message.value,
         date:new Date().getTime()
      };
      axios.post("http://localhost:3004/articles",{
          author:user.author,
          content:user.content,
          date:user.date   
      }).then((res)=>console.log(res));
      formref.current.reset();
   }

   return (
      <div className='form-container'>
         <form ref={formref}
            onSubmit={handleSubmit}>
            <h2>Formulaire de contact</h2>
            <label htmlFor="name">username</label>
            <input type="text" autoComplete='off' id='name' name="name"/> {/* email */}
            <label htmlFor="email">votre adresse email</label>
            <input type="email" autoComplete='off' name="email" id='email'/> {/*message */}
            <label htmlFor="message">votre message</label>
            <textarea name='message' placeholder='ecrire votre message ici' rows="10" cols="50" id='message'></textarea>

            {/* envoie du formulaire */}
            <input type="submit" value="soumettre le formulaire"/>
         </form>
      </div>
   );
};

export default Form;
