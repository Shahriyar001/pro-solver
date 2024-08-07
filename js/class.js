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
