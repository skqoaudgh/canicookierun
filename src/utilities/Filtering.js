export const filtering = (list, search, grade, order) => {
  let res =
    search === ''
      ? JSON.parse(JSON.stringify(list))
      : list.filter((item) => item.name.indexOf(search) > -1);

  res =
    grade === 'allGrade' ? res : res.filter((cookie) => cookie.grade === grade);

  switch (order) {
    case 'release_asc':
      res.sort((a, b) => new Date(a.release) - new Date(b.release));
      break;
    case 'release_desc':
      res.sort((a, b) => new Date(b.release) - new Date(a.release));
      break;
    case 'name_asc':
      res.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name_desc':
      res.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'health_asc':
      res.sort((a, b) => a.health.split('~')[1] - b.health.split('~')[1]);
      break;
    case 'health_desc':
      res.sort((a, b) => b.health.split('~')[1] - a.health.split('~')[1]);
      break;
    default:
      break;
  }
  return res;
};
