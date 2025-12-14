const lodash = require("lodash")


// console.log("Hello Nirjhor");

// const userNames = ["nirjhor", "sazzad", "hossain"];
// console.log(userNames);


/**
 * তুমি এখানে debounce ব্যবহার করছো, যাতে বারবার function call হলেও কাজটা একবারই হয়।
 */

// const save = (query) => {
//   console.log('Saving search for:', query, 'at', new Date().toISOString());
// };

// const debouncedSave = lodash.debounce(save, 300);

// debouncedSave('a');
// debouncedSave('ab');
// debouncedSave('abc');



/**
 * JavaScript এ object / array reference দিয়ে কাজ করে
 * মানে:
 * const a = original;
 * a.user.name = 'Bob';
 * 
 * 👉 এখানে original ও বদলে যাবে (বিপদ!)
 * cloneDeep দরকার যখন তুমি nested object/array কে safe ভাবে কপি করে পরিবর্তন করতে চাও, যাতে original data নষ্ট না হয়।
 */

// const original = { user: { name: 'Alice', roles: ['admin'] } };
// const copy = lodash.cloneDeep(original);

// copy.user.name = 'Bob';
// copy.user.roles.push('editor');

// console.log(original.user.name); // Alice
// console.log(original.user.roles); // ['admin']
// console.log(copy.user.roles);     // ['admin','editor']





const items = [
    { id: 1, type: 'fruit', name: 'apple' },
    { id: 2, type: 'vegetable', name: 'carrot' },
    { id: 3, type: 'fruit', name: 'banana' },
];

const grouped = lodash.groupBy(items, 'type');
console.log(grouped);
/*
{
  fruit: [{id:1,...},{id:3,...}],
  vegetable: [{id:2,...}]
}
*/