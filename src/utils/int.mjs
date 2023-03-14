export default (x) => {
  try {
    return Number.parseInt(x, 10);
  } catch (error) {
    setTimeout(() => {
      throw new Error(error);
    });

    console.log("not cast to int, %s", error);
  }
};
