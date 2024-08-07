// 1. Implement a Basic Promise
// Problem:
// Create a basic implementation of a Promise class that supports then and catch methods.

class MyPromise {
  constructor(executor) {
    this.state = "PENDING";
    this.value = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      if (this.state === "PENDING") {
        this.state = "FULFILLED";
        this.value = value;
        this.callbacks.forEach((callback) => callback.onFulfilled(this.value));
      }
    };

    const reject = (reason) => {
      if (this.state === "PENDING") {
        this.state = "REJECTED";
        this.value = reason;
        this.callbacks.forEach((callback) => callback.onRejected(this.value));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleCallback = () => {
        try {
          if (this.state === "FULFILLED") {
            const result = onFulfilled ? onFulfilled(this.value) : this.value;
            resolve(result);
          } else if (this.state === "REJECTED") {
            const result = onRejected ? onRejected(this.value) : this.value;
            reject(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "PENDING") {
        this.callbacks.push({
          onFulfilled: handleCallback,
          onRejected: handleCallback,
        });
      } else {
        handleCallback();
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// Example Usage:
new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//  2. Deep Clone an Object
// Problem:
// Write a function that deep clones an object, meaning it should create a new object that is identical to the original, including nested objects.

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Array) {
    let copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  if (obj instanceof Object) {
    let copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepClone(obj[key]);
      }
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}

// Example Usage:
let original = { a: 1, b: { c: 2 } };
let clone = deepClone(original);
console.log(clone); // { a: 1, b: { c: 2 } }
