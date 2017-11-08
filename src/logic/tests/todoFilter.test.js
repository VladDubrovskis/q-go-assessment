import todoFilter, { FILTER_SHOW_PENDING } from '../todoFilter';

const testData = [
  { id: 1, content: 'first', complete: false },
  { id: 2, content: 'second', complete: true },
]
describe('todos filter', () => {
  it('should return all tasks by default', () => {
    expect(todoFilter(testData)).toEqual(testData);
  });

  it('should return incomplete tasks for FILTER_SHOW_PENDING', () => {
    expect(todoFilter(testData, FILTER_SHOW_PENDING)).toEqual([testData[0]]);
  });
});