export default function createIteratorObject(report) {
  const items = [];
  Object.values(report.allEmployees).forEach((val) => items.push(...val));
  return items;
}
