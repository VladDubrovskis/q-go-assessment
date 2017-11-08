export default (items, filter) => {
  if(filter) {
    return items.filter((item) => item.complete === false);
  }
  return items;
}
