import React,{ useState ,useContext} from 'react';

import Input from '../../shared/components/FormElement/Input';
import { VALIDATOR_EMAIL ,VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/components/util/validators';
import Button from '../../shared/components/FormElement/Button';
import { useForm } from '../../shared/components/hooks/form-hook'
import '../../places/pages/PlaceForrm.css';
import {AuthContext} from '../../shared/components/context/auth-context'

const Authenticate = () => {
  const auth = useContext(AuthContext)
  const[isLoginMode,setIsLoginMode]=useState(true);

  const [ formState, inputHandler,setFormData ]= useForm({
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      },
  
    },false);

    const authenticateSubmitHandler = event =>{
      event.preventDefault();
      console.log(formState.inputs);
 
    };

    const switchModeHandler = () =>{
      if(!isLoginMode){
        setFormData({
          ...formState.inputs,
          name :undefined
        },formState.inputs.email.isValid && formState.inputs.password.isValid
      )
    }else{
      setFormData({
        ...formState.inputs,
        name:{
          value:'',
          isValid:false
        }
      },false)
    }
      setIsLoginMode(prevMode => !prevMode )
    };

  return (
    <form className="place-form" onSubmit={authenticateSubmitHandler}>
      {!isLoginMode && (
        <Input
          element="input"
          id="name"
          type="text"
          label="Your Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your name "
          onInput={inputHandler}
        />
      )}
      <Input
        id="email"
        element="input"
        type="email"
        label="E-Mail"
        validators={[VALIDATOR_EMAIL()]}
        errorText="please enter valid email-id."
        onInput={inputHandler}
      />
      <Input
        id="password"
        element="input"
        type="password"
        label="Password"
        validators={[VALIDATOR_MINLENGTH(6)]}
        errorText="please enter the valid password (at least 6 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" onClick={auth.login} disabled={!formState.isValid}>
        {isLoginMode ? "LOGIN" : "SIGNUP"}
      </Button>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </form>
  );
};

export default Authenticate;