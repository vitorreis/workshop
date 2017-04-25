/**
 * Write your reducer in here that handles the three actions from actions.js and has two properties in its state:
 *
 * - items      [Array]  The items in the todolist
 * - inputValue [String] The value of the input field
 */

 const initialState = {
 	items: [{
 	  text: 'Get to Las Palmas 🌴',
 	  checked: true,
 	}, {
 	  text: 'Learn the basics of React 👩‍🎓',
 	  checked: false,
 	}, {
 	  text: 'Go surfing 🏄',
 	  checked: false,
 	}],
 	inputValue: '',
 };

 const reducers = (state = initialState, action) => {
   switch (action.type) {
     case 'ADD_ITEM':
     console.log('add item');
       return {
         ...state,
         inputValue: '',
          items: [
            ...state.items,
            {
              checked: false,
              text: state.inputValue
            }
          ]
       }
       case 'CHECK_ITEM':
         return {
           ...state,
           items: state.items.map(item => {
     				if (item.text !== action.text) return item;

     				return {
     					...item,
     					checked: !item.checked,
     				};
     			})
         }
     case 'EDIT_INPUT':
       return {
         ...state,
         inputValue: action.text
       }
     default:
       return state;
   }
 }

 export default reducers;
