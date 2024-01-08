// export default (array, city, newGrades) => {

export default (arr, city, grades) => {
  const gradesLookup = grades.reduce((lookup, item) => {
    // eslint-disable-next-line no-param-reassign
    lookup[item.studentId] = item.grade;
    return lookup;
  }, {});

  return arr
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const newObj = { ...obj };
      newObj.grade = gradesLookup[newObj.id] || 'N/A'; // Add new grade property
      return newObj;
    });
};
