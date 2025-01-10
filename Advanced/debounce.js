const debounce = (func,delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      await func(...args);
    }, delay);
  };
};

const saveInput = () => {
  console.log("Saving data");
};

const processChange = debounce(saveInput,3000);

console.log(processChange());
