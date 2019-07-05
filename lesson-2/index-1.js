// 'aaabbccdbaa' => '3a2b2c1d1b2a';

function transform(str) {
    let count = 1;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
            continue;
        }
        result = `${result}${count}${str[i]}`;
        count = 1;
    }
    return result;
}

console.log(transform('aaabbccdbaa'));
