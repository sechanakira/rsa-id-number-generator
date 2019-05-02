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

const generateRSAID = (citizen = false, sex = 'male') => {
    let dob = randomDOB();
    console.log(dob);
    let id = dob.toLocaleDateString()
    return id;
};

for(let i = 0; i<=10; i++){
    console.log(generateRSAID());
}
