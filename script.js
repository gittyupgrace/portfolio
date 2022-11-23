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
    }
];

app.displaySkills = () => {
    app.skillsList = document.getElementById('skillsList');

    app.skills.forEach((skill) => {
        const skillsListItem = document.createElement('li');

        const skillsIcon = document.createElement('i');

        const iconClassArray = skill.icon;
        iconClassArray.forEach((iconClass) => {
            skillsIcon.classList.add('icon');
            skillsIcon.classList.add(iconClass);
            console.log(skillsIcon)
        });

        skillsListItem.textContent = skill.name;
        skillsListItem.append(skillsIcon);
        skillsList.append(skillsListItem);
    });
};


//Work Section

app.projects = [
    {
        title: 'Postcards from Ron',
        image: '',
        alt: '',
        tools: ['html', 'css', 'js'], 
        description: '', 
        links: ['url', 'url']
    },
    {
        title: 'Block Party: A Quiz About Quilts',
        image: '', 
        alt: '', 
        tools: ['html', 'css', 'js'],
        description: '',
        links: ['url', 'url']
    },
    {
        title: 'Sophie',
        image: '', 
        alt: '', 
        tools: ['html', 'css', 'js'],
        description: '',
        links: ['url', 'url']
    },
    {
        title: 'React Project',
        image: '',
        alt: '', 
        tools: ['html', 'css', 'react'],
        description: '',
        links: ['url', 'url']
    },
]

//loop through array and for each project:

//insert below info into .projectContainer div --> should this be a ul with .projectContainer being a li instead? maybe!

//inside .projectImage div - populate img src and alt text
//inside .projectContent div -
//populate h5 element with title
//get ul, create li's, populate with tools by looping through tool array
//get p, populate with description
//get ul, create li's with a tags, populate href with link urls by looping through link array


app.init = () => {
    app.displaySkills();
}

app.init();
