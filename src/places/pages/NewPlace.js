import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElement/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
import Button from '../../shared/components/FormElement/Button';
import {useForm} from '../../shared/components/hooks/form-hook'
import './PlaceForrm.css';



const NewPlace = () => {
  const [ formState, inputHandler ]= useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    },
    address:{
      value: '',
      isValid: false
    }

  },false);

  const placeSubmitHandler = event =>{
    event.preventDefault();
    console.log(formState.inputs);
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter the valid address."
        onInput={inputHandler}
      />
    <Button type="submit" disabled ={!formState.isValid }>ADD PLACE</Button>

    </form>
  );
};

export default NewPlace;


// import React, { useCallback, useReducer } from 'react';

// import Input from '../../shared/components/FormElement/Input';
// import Button from '../../shared/components/FormElement/Button';
// import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
// import './NewPlace.css';

// const formReducer = (state, action) => {
//   switch (action.type) {
//     case 'INPUT_CHANGE':
//       let formIsValid = true;
//       for (const inputId in state.inputs) {
//         if (inputId === action.inputId) {
//           formIsValid = formIsValid && action.isValid;
//         } else {
//           formIsValid = formIsValid && state.inputs[inputId].isValid;
//         }
//       }
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.inputId]: { value: action.value, isValid: action.isValid }
//         },
//         isValid: formIsValid
//       };
//     default:
//       return state;
//   }
// };

// const NewPlace = () => {
//   const [formState, dispatch] = useReducer(formReducer, {
//     inputs: {
//       title: {
//         value: '',
//         isValid: false
//       },
//       description: {
//         value: '',
//         isValid: false
//       }
//     },
//     isValid: false
//   });

//   const inputHandler = useCallback((id, value, isValid) => {
//     dispatch({
//       type: 'INPUT_CHANGE',
//       value: value,
//       isValid: isValid,
//       inputId: id
//     });
//   }, []);

//   return (
//     <form className="place-form">
//       <Input
//         id="title"
//         element="input"
//         type="text"
//         label="Title"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid title."
//         onInput={inputHandler}
//       />
//       <Input
//         id="description"
//         element="textarea"
//         label="Description"
//         validators={[VALIDATOR_MINLENGTH(5)]}
//         errorText="Please enter a valid description (at least 5 characters)."
//         onInput={inputHandler}
//       />
//       <Button type="submit" disabled={!formState.isValid}>
//         ADD PLACE
//       </Button>
//     </form>
//   );
// };

// export default NewPlace;
