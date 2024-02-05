let college = [
    {
        name: "Harry",
        age: 17,
        group: "ИС-2-1",
        studID: 321232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        cash: 500,
        isStudent: true
    },
    {
        name: "Ron",
        age: 19,
        group: "ССА-3-2",
        studID: 321232,
        typeLearning: "Заочная",
        task: ["ИЗО", "БЖ", "ПРАВО", "МДК-04-01"],
        cash: 4500,
        isStudent: true
    },
    {
        name: "Tom",
        age: 32,
        isKurator: false,
        kuratorGroup: "ССА-3-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-1","МДК-02-2","МДК-09.01","МДК-09-02"],
        isStudent: true,
    },
    {
        name: "Bob",
        age: 32,
        isKurator: true,
        kuratorGroup: "ССА-2-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-1","МДК-02-2","МДК-09.01","МДК-09-02"],
        isStudent: false,
    }
];

let count = 3;

let personName = college[count] ["name"];
let personAge = college[count] ["age"];

let isStudent = college[count] ["isStudent"];
let studentCash = college[count] ["cash"];
let studentTypeLearning = college[count] ["TypeLearning"];

let isKurator = college[count] ["isCurator"];
let isKuratorGroup = college[count] ["kuratorGroup"];

if ( isStudent === true ) {
    console.log(`Вы выбрали студента ${personName}`);
    if ( personAge >= 18 ) {
        console.log(`Студент ${personName} совершеннолетний. Ему ${personAge}`);
    } else {
        console.log(`Студент ${personName} не совершеннолетний. Ему ${personAge}`);
    }
    if (studentCash >= 4500 ) {
        console.log(`Студент ${personName} получает повышенную стипендию. (${studentCash} руб.)`);
    } else if ( studentCash <= 4400 || studentCash >= 1) {
        console.log(`Студент ${personName} получает обычную стипендию. (${studentCash} руб.)`);
    } else if  ( studentCash === 0 ) {
        console.log(`Студент ${personName} не получает стипендию.`);
    }          

} else if (isStudent === false ) {
    console.log(`Вы выбрали преподователя ${personName}`)
    if (isKurator = true) {
        console.log(`Преподаватель ${personName} куратор группы ${isKuratorGroup}`)
    }
}