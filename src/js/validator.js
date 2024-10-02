export class Validator{
    validateUsername(name) {
        const regEx = /[a-z0-9\-_]/;
        const badRegEx = /^[0-9\-_]|\d{3,}|[0-9\-_]$/;
        if (!regEx.test(name)) throw new Error(`Недопустимые символы в имени ${name}`);
        if (badRegEx.test(name)) throw new Error(`Недопустимое расположение символов в имени ${name}`);
        return name;
    }
}