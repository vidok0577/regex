import { normlizeTelephone } from '../telephone';

const numberTel = [['8 (927) 000-00-00', '+79270000000'],
['+7 960 000 00 00', '+79600000000'],
['+86 000 000 0000', '+860000000000']];

test.each(numberTel)('тестируем телефоны', (telephone, expected) => {
    expect(normlizeTelephone(telephone)).toEqual(expected);
});