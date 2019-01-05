const handleArray = (arr, path) => {
  arr.forEach((el, i) => {
    if (typeof el === "object") {
      if (!Array.isArray(el)) {
        pathifyObject(el, [...path, i]);
      } else {
        handleArray(el, [...path, i]);
      }
    }
  });
};

const pathifyObject = (obj, path = []) => {
  obj.path = path;
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object") {
      if (!Array.isArray(value)) {
        pathifyObject(value, [...path, key]);
      } else if (key !== "path") {
        handleArray(value, [...path, key]);
      }
    }
  }
  return obj;
};

export default pathifyObject;
