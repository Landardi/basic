let theCompany = {
    isCompanyOne: {
        name: "Победа",
        sotrudniki: ["Katya","Masha","Oleg","Vasya"]
    },
    isCompanyTwo: {
        name: "Ямаил",
        sotrudniki: ["Denis","Roman","Sonya","Alexandr"]
    }
};

for (let k in theCompany) {
    console.log("Сотрудники копании", theCompany[k].name,":");
    for (let sotrudniki of theCompany[k].sotrudniki) {
        console.log(sotrudniki);    
}
}