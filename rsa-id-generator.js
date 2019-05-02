const randomNumberWithinRange = (start, end) => {
    start = Math.ceil(start);
    end = Math.floor(end);
    return Math.floor(Math.random() * (end - start + 1)) + start;
};

const randomDOB = () => {
    let now = new Date();
    let startYear = now.getFullYear() - 65;
    let endYear = now.getFullYear() - 18;
    let randomYear = randomNumberWithinRange(startYear, endYear);
    let randomMonth = randomNumberWithinRange(0, 11);
    let randomDay = randomNumberWithinRange(1, 27);
    return new Date(randomYear, randomMonth, randomDay);
};

const generateRSAID = (citizen = false, gender = 'male') => {
    let dob = randomDOB();
    let sex = '8';
    if(gender == 'female'){
        sex = '9';
    }
    let values = [
        dob.getFullYear().toString(),
        dob.getMonth().toString().padStart(2,'0'),
        dob.getDay().toString().padStart(2,'0'),
        sex
    ];
    let id = values.map(e=>e).join('').toString();
    return id;
};

const calculateCheckDigit = (digitsAsString) => {
    //const digits = ('' + dob + gender + sequence + citizenship + eight).split('').map(d => Number(d))
    const digits = digitsAsString.replace(/\D/g, '').split('').map(d => Number(d));
    const checkSum = digits.reverse().map((d, ix) => {
        if (ix % 2 === 0) {
            d *= 2;
            if (d > 9) {
                d -= 9
            }
        }
        return d
    }).reduce((memo, d) => memo += d, 0);
    return checkSum * 9 % 10
};

for (let i = 0; i <= 10; i++) {
    console.log(generateRSAID());
}
