const app = {};


//Skills Section

app.skills = [
    {
        name:'HTML5', 
        icon: ['fa-brands', 'fa-html5']
    }, 
    {
        name: 'CSS3',
        icon: ['fa-brands', 'fa-css3-alt']
    },
    {
        name: 'SCSS',
        icon: ['fa-brands', 'fa-sass']
    },
    {
        name: 'JavaScript',
        icon: ['fa-brands', 'fa-js']
    },
    {
        name: 'React',
        icon: ['fa-brands', 'fa-react']
    },
    {
        name: 'GitHub',
        icon: ['fa-brands', 'fa-github']
    },
    {
        name: 'Paired Programming',
        icon: ['fa-solid', 'fa-code-branch']
    },
    {
        name: 'Responsive Design',
        icon: ['fa-solid', 'fa-mobile-screen']
    },
    {
        name: 'Web Accessibility',
        icon: ['fa-solid', 'fa-universal-access']
    },
];



app.skillsList = document.getElementById('skillsList');

app.skills.forEach( (skill) => {
    const skillsListItem = document.createElement('li');

    const skillsIcon = document.createElement('i');

    const iconClassArray = skill.icon;
    iconClassArray.forEach( (iconClass) => {
        skillsIcon.classList.add(iconClass);
        console.log(skillsIcon)
    });

    skillsListItem.textContent = skill.name;
    skillsListItem.append(skillsIcon);
    skillsList.append(skillsListItem);
});

