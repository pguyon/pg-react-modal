### How to install
```sh
npm install pg-react-modal
```

### Description
This library allows you to easily create a modal and customize it with parameters.

### Usage
- Start by importing the library
```sh
import { Modal } from "pg-react-modal";
```
- Import the hook
```sh
import useModal from 'pg-react-modal/dist/hooks/useModal'
```

| Parameters | Type | Description |
| ------ | ------ | ------ |
| isOpen | Boolean | Defines if the modal is open or not |
| actionButton | Function | Bind a function to the button |
| headerContent | String | Add a title to the modal |
| bodyContent | String | Add a message to the modal |
| Hide | Function | Bind the Toggle function on the parameter to close the modal |
| buttonContent | String | Add a text to the button |
| mainBackground | String | Allows you to change the background color of the modal |
| modalBackground | String | Allows you to change the color of the modal box background |
| buttonBackground | String | Allows you to change the background color of the button |
| buttonColor | String | Allows you to change the text color of the button |

## Example

import { Modal } from 'pg-react-modal';
import useModal from 'pg-react-modal/dist/hooks/useModal'


function App() {
  const { open, toggle } = useModal();

    const test = () => {
      toggle();
    };
  return (
    
    <>
    <div>
      <button className="modal-toggle" onClick={toggle}>
        Show modal
      </button>

      <Modal
        isOpen={open}
        actionButton={test}
        headerContent="Header content"
        bodyContent="Body content"
        buttonContent="close"
        mainBackground="grey"
        modalBackground="lightgrey"
        buttonBackground="blue"
        buttonColor="white"
        hide={toggle}
      />
    </div>
  </>
  );
}


