import { makeOrder } from '.';

describe('makeOrder', () => {
  it('can have an id', async () => {
    const partialOrder = {
      table: 1,
      date: '1',
    };

    await expect(() =>
      makeOrder({
        ...partialOrder,
        id: '1',
      }),
    ).rejects.toThrow('Validation error');

    expect(() => makeOrder({ ...partialOrder, id: undefined })).not.toThrow();
  });

  it('can create an id', async () => {
    const partialOrder = {
      table: 1,
      date: '1',
    };

    const order = await makeOrder({ ...partialOrder, id: undefined });
    expect(order.getId()).toHaveLength(25);
  });

  it('can have correct values', async () => {
    const orderInput = {
      id: '1234567890123456789012345',
      table: 1,
      date: '1',
    };

    const order = await makeOrder(orderInput);

    expect(order.getId()).toEqual(orderInput.id);
    expect(order.getTable()).toEqual(orderInput.table);
    expect(order.getDate()).toEqual(orderInput.date);
  });
});
