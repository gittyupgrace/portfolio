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
    const skillsList = document.getElementById('skillsList');

    app.skills.forEach((skill) => {
        const skillsListItem = document.createElement('li');

        const skillsIcon = document.createElement('i');

        skill.icon.forEach((iconClass) => {
            skillsIcon.classList.add('icon');
            skillsIcon.classList.add(iconClass);
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
        image: './assets/mockupTestImg.png',
        alt: 'this is alt text placeholder',
        tools: ['html', 'css', 'js'], 
        description: `Postcards from Ron is an app that pulls data from two separate API's to create a charming and giggle-inducing visual experience for fans of the character Ron Swanson from TV show Parks and Recreation.`, 
        links: [
            {
                title: 'View Live', 
                href: 'url'
            }, 
            {
                title: 'View Code',
                href: 'https://github.com/gittyupgrace/postcards-from-ron'
            }]
    },
    {
        title: 'Block Party: A Quiz About Quilts',
        image: './assets/mockupTestImg.png', 
        alt: '', 
        tools: ['html', 'css', 'js'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus ipsam eveniet ex quasi unde laboriosam numquam minus soluta voluptates?',
        links: [
            {
                title: 'View Live',
                href: 'url'
            },
            {
                title: 'View Code',
                href: 'url'
            }]
    },
    {
        title: 'Sophie',
        image: './assets/mockupTestImg.png', 
        alt: '', 
        tools: ['html', 'css', 'js'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus ipsam eveniet ex quasi unde laboriosam numquam minus soluta voluptates?',
        links: [
            {
                title: 'View Live',
                href: 'url'
            },
            {
                title: 'View Code',
                href: 'url'
            }]
    },
    {
        title: 'React Project',
        image: './assets/mockupTestImg.png',
        alt: '', 
        tools: ['html', 'css', 'react'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus ipsam eveniet ex quasi unde laboriosam numquam minus soluta voluptates?',
        links: [
            {
                title: 'View Live',
                href: 'url'
            },
            {
                title: 'View Code',
                href: 'url'
            }]
    },
]

app.displayProjects = () => {

    const projectList = document.getElementById('projectList');

    app.projects.forEach((project) => {

        //for each project object, create an li with a class of projectContainer
        const projectListItem = document.createElement('li');
        projectListItem.classList.add('projectContainer');

        //for inside projectContainer li, create two divs, one with a class of projectImage, the other with a class of project Content, append each to li
        const projectImageContainer = document.createElement('div');
        projectImageContainer.classList.add('projectImage');
        projectListItem.appendChild(projectImageContainer);

        const projectContentContainer = document.createElement('div');
        projectContentContainer.classList.add('projectContent');
        projectListItem.appendChild(projectContentContainer);

        console.log(projectListItem);

        //projectImageContainer div --> create img element, insert img src and alt text, append img element to imagecontainer div
        const image = document.createElement('img');
        image.src = project.image;
        image.alt = project.alt;
        projectImageContainer.append(image);


        //projectContentContainer div --> create and populate h5, tool ul, p, links ul and append to contentcontainer div

        const projectTitle = document.createElement('h5');
        projectTitle.textContent = project.title;
        projectContentContainer.append(projectTitle);

        const toolList = document.createElement('ul');
        project.tools.forEach((tool) => {
            const toolListItem = document.createElement('li');
            toolListItem.textContent = tool;
            toolList.append(toolListItem);
        });
        projectContentContainer.append(toolList);

        const descriptionContainer = document.createElement('p');
        descriptionContainer.textContent = project.description;
        projectContentContainer.append(descriptionContainer);

        const linkList = document.createElement('ul');
        project.links.forEach((link) => {
            const linkListItem = document.createElement('li');
            const linkUrl = document.createElement('a');

            linkUrl.textContent = link.title;
            linkUrl.href = link.href;

            linkListItem.append(linkUrl);
            linkList.append(linkListItem);
        });
        projectContentContainer.append(linkList);

        //finally append projectListItem to projectList ul
        projectList.append(projectListItem);
    });
};

app.init = () => {
    app.displaySkills();
    app.displayProjects();
}

app.init();
