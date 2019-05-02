const randomNumberWithinRange = (start, end) => {
    return Math.random() * (end - start) + start;
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

const generateRSAID = () => {
    let dob = randomDOB();
    let id = String(dob.getFullYear() + '' + (dob.getMonth() + '').padStart(2,'0') + (dob.getDay() + '').padStart(2,'0'));
    return id;
};

console.log(generateRSAID());