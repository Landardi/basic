let people = [ 
    ["Radagon", 25],
    ["Margott", 11],
    ["Melina", 16] ];

    console.log("ДО:");
for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people[i].length ; j++) {

        let resault = people [i] [j];
        console.log(resault);
    }
    console.log("—————————");
}

console.log("ПОСЛЕ:");

for (let i = 0; i < people.length; i++) 
    people[i][1] +=10

    for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < people[i].length ; j++) {
    
            let resault = people [i] [j];
            console.log(resault);
        }
        console.log("—————————");
    }