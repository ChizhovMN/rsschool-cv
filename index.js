const listOfSkills = ['HTML', 'JS', 'CSS']
const listOfProjects = [
    ['Travel', 'https://rolling-scopes-school.github.io/chizhovmn-JSFEPRESCHOOL2022Q2/travel/'],
    ['Momentum', 'https://rolling-scopes-school.github.io/chizhovmn-JSFEPRESCHOOL2022Q2/momentum/'],
    ['Eldritch Game', 'https://chizhovmn.github.io/codejam-eldritch/'],
];

let ulSkills = document.createElement('ul');

let ulProjects = document.createElement('ul');

ulSkills.classList.add('skill-list');
ulProjects.classList.add('project-list');

for (let i = 0; i < listOfSkills.length; i++) {
    let li = document.createElement('li');
    li.classList.add('section-item');
    li.innerHTML = listOfSkills[i];
    li.style.listStyleType = 'none';
    ulSkills.appendChild(li);
}
skills.appendChild(ulSkills);

for (let i = 0; i < listOfProjects.length; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.classList.add('link')
    li.classList.add('section-item');
    li.style.listStyleType = 'none';
    li.appendChild(a);

    a.href = listOfProjects[i][1];
    a.innerText = listOfProjects[i][0];
    a.target = '_blank';
    ulProjects.appendChild(li);
}
projects.appendChild(ulProjects);
