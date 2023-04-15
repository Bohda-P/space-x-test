export const groupByThree = (toursData: Array<any> = []) => {
  const result = [];
  for (let index = 0; index < toursData.length; index += 3) {
    const groupe = [toursData[index], toursData[index + 1], toursData[index + 2]];
    result.push(groupe);
  }

  return result;
};
