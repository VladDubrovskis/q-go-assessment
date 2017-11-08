export const FILTER_SHOW_PENDING = 'qgo/assessment/FILTER_SHOW_PENDING';

export default (items, filter) => {
  if(filter === FILTER_SHOW_PENDING) {
    return items.filter((item) => item.complete === false);
  }
  return items;
}
