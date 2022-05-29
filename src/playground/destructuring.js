//
//OBJECT DESTRUCTURING
//

const person = {
  name: "Andrew",
  age: 23,
  location: {
    city: "Delhi",
    temp: 42,
  },
};
const { age, name: firstname } = person;
console.log(`my name is ${firstname} . I am ${age} years old .`);

const book = {
  title: "Ego is Enemy",
  Author: "Ryan Holiday",
  publisher: {
    //  name:''
  },
};

const { name: publishername = "Self-published" } = book.publisher;
console.log(publishername);

//
//ARRAY dESTRUCTURING
//

const ITEM = ["coffee(hot)", "$2.00", "$2.50", "$2.75"];
const [hot, , mid = "$2.5"] = ITEM;
console.log(`A medium coffee ${hot} costs ${mid}`);
