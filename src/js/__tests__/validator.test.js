import { Validator } from '../validator';

const goodName = ['Test-User', 'Use_r', 'User12Test'];
const badName = ['1Test', 'Test_', 'Test123Name'];

test.each(goodName)('тестируем валидацию правильных имён', (name) => {
    const nameValid = new Validator();
    expect(nameValid.validateUsername(name)).toEqual(name);
});

test.each(badName)('тестируем валидацию НЕправильных имён', (name) => {
    const nameNotValid = new Validator();
    expect(() => {
        nameNotValid.validateUsername(name);
    }).toThrow();
});