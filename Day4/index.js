const skills=[
    { name :"HTML", level:"Intermediate"},
    { name :"CSS", level: "Advanced"},
    { name :"JavaScript", level: "Beginner" }
]
function formatskills(skillsArray){
    return skillsArray.map(skills => {
        return `${skills.name} (${skills.level})`
    })
}
const formattedskill=formatskills(skills);
console.log("/n..........MAP RESULT..........");
console.log(formattedskill)

//FILTER
console.log("/n..........FILTER RESULT..........");
const Filter =skills.filter(lang=>lang.level==="Advanced")
console.log(Filter);

//SORTING
console.log("/n..........SORTED RESULT..........");
const sort =skills.sort((a,b)=>a.name.localeCompare(b.name));
console.log(sort);




