let set1 = () => {
  console.log("This is set 1");
};

let set2 = (callback) => {
  setTimeout(() => {
    console.log("This is set 2");
    callback();
  }, 2000);
};

let set3 = () => {
  console.log("This is set 3");
};
set2(set1);
