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
        skillsIcon.setAttribute('aria-hidden', 'true');

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
        title: 'Sophie',
        image: './assets/sophieBlog.png',
        alt: `A screenshot of the homepage of Sophie's blog, featuring a header that reads 'it's all about Sophie' and a portrait of Sophie posing in front of a blue sky.`,
        tools: ['html', 'scss', 'js'],
        description: 'Sophie is a fully responsive, multi-page blog website created entirely from a set of client PSD design files.',
        links: [
            {
                title: 'View Live',
                href: 'https://sophie-conversion.gittyupgrace.com/'
            },
            {
                title: 'View Code',
                href: 'https://github.com/gittyupgrace/sophie-psd-conversion.git'
            }]
    },
    {
        title: 'Pearls from Ron',
        image: './assets/pearlsFromRon.png',
        alt: 'A screenshot of the landing page for the Ron Swanson quote generator.',
        tools: ['html', 'css', 'js'], 
        description: `Pearls from Ron is an app that pulls data from two separate APIs to create a charming and giggle-inducing visual experience for fans of the character Ron Swanson from TV show Parks and Recreation. `, 
        links: [
            {
                title: 'View Live', 
                href: 'https://pearls-from-ron.gittyupgrace.com/'
            }, 
            {
                title: 'View Code',
                href: 'https://github.com/gittyupgrace/pearls-from-ron.git'
            }]
    },
    {
        title: 'Rose Apothecary',
        image: './assets/roseApothecary.png',
        alt: 'A screenshot of the homepage for the Rose Apothecary e-commerce store.', 
        tools: ['react', 'firebase'],
        description: `An e-commerce environment for Rose Apothecary, the fictional general store from TV show Schitt's Creek, built using React and Firebase.`,
        links: [
            {
                title: 'View Live',
                href: 'https://rose-apothecary.gittyupgrace.com/'
            },
            {
                title: 'View Code',
                href: 'https://github.com/gittyupgrace/rose-apothecary.git'
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
        linkList.classList.add('linkList');
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


//Hamburger Menu Functionality

//retrieve hamburger menu button and navBar menu from DOM
app.toggleMenuButton = document.getElementById('toggleMenuButton');
app.navBarMenu = document.getElementById('navBarMenu')

//create a function to add .showMenu class to navBarMenu which toggles visibility from hidden to visible
app.addShowMenuClass = () => {
    app.navBarMenu.classList.toggle('showMenu');
}

//create a click event for toggleMenuButton that calls addShowMenuClass function
app.toggleEvent = () => {
    app.toggleMenuButton.addEventListener('click', app.addShowMenuClass);
}




app.init = () => {
    app.displaySkills();
    app.displayProjects();
    app.toggleEvent();
}

app.init();
