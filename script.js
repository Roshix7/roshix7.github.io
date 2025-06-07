// script.js

// Dummy data for projects
const projectsData = [
    {
        id: 'debian-server-setup',
        title: 'Installation et Configuration d\'un Serveur Debian',
        image: 'images/debian.png', // Image de placeholder pour un serveur
        shortDescription: 'Mise en place d\'un serveur Linux Debian 12 fonctionnel avec Apache, PostgreSQL et PHP, interrogeable depuis une machine hôte virtuelle.',
        detailedDescription: 'Ce projet consistait à installer et configurer de A à Z un serveur virtuel sous **Debian 12** (sans interface graphique) sur une machine virtuelle **Qemu/KVM**. J\'ai déployé et rendu fonctionnels les services essentiels pour une application web : le serveur web **Apache**, le système de gestion de base de données **PostgreSQL**, et l\'interpréteur de scripts côté serveur **PHP**. Le système complet était accessible et interrogeable depuis la machine hôte, incluant l\'affichage de pages web, l\'interrogation de la base de données PostgreSQL via ligne de commande et depuis un client web (PhpPgAdmin), et la gestion sécurisée des mots de passe avec SHA-256.',
        competences: [
            'Administration Linux (Debian)',
            'Virtualisation (Qemu/KVM)',
            'Configuration Apache',
            'Gestion de bases de données PostgreSQL',
            'Déploiement PHP',
            'Réseau et connectivité',
            'Sécurité des systèmes'
        ],
        objectifs: 'Maîtriser le déploiement d\'un environnement serveur complet pour des applications web, comprendre l\'interconnexion des différents services (web, base de données, langage serveur) et renforcer les compétences en ligne de commande Linux.',
        travailGroupe: 'Projet individuel.',
    },
    {
        id: 'data-exploitation',
        title: 'Exploitation et Analyse de Base de Données',
        image: 'images/postgreSQL.png', // Image de placeholder pour un projet de données
        shortDescription: 'Projet d\'exploitation d\'une base de données axé sur l\'exploration, le nettoyage et la transformation de données open-source d\'accidents de la route en France.',
        detailedDescription: 'Ce projet d\'exploitation d\'une base de données a été une première immersion dans la gestion de grands volumes de données. À partir d\'une base de données open-source sur les accidents corporels de la route en France (2006-2023), l\'objectif était de réaliser une étude simple avec des graphiques. Le projet s\'est articulé en deux phases : **exploration, nettoyage et transformation des données** et **production et analyse des graphiques**. J\'ai travaillé avec un binôme pour se connecter à une base PostgreSQL spécifique et accéder à des schémas personnalisés pour la manipulation des données.',
        competences: [
            'Exploration de données',
            'Nettoyage de données',
            'Transformation de données',
            'Extraction de données (SQL)',
            'Analyse statistique',
            'Visualisation de données',
            'Gestion de projet (contraintes et risques)',
            'Collaboration en binôme'
        ],
        objectifs: 'Réaliser une étude simple sur les accidents de la route à partir de données brutes, en passant par toutes les étapes de la Data Science : compréhension, nettoyage, transformation et visualisation des données. Appliquer des connaissances en bases de données et statistiques.',
        travailGroupe: 'En binôme. La répartition des tâches impliquait l\'exploration et le nettoyage des données, ainsi que la production et l\'analyse des graphiques. J\'ai collaboré étroitement sur l\'ensemble des étapes, en particulier sur l\'extraction et la manipulation des données brutes en PostgreSQL.',
        techniquesAcquises: [
            'PostgreSQL (requêtes complexes, schémas, vues)',
            'Exploration de données',
            'Nettoyage et transformation de données',
            'Exportation CSV',,
            'Gestion de projet'
        ]
    },
    {
        id: 'automatic-classification',
        title: 'Système de Classification Automatique de Dépêches',
        image: 'images/java.png', // Image de placeholder pour un projet de classification
        shortDescription: 'Développement d\'un programme de classification automatique de textes courts (dépêches journalistiques) en 5 catégories prédéfinies.',
        detailedDescription: 'L\'objectif principal de ce projet était de concevoir un programme de classification automatique capable d\'attribuer une des 5 catégories (SCIENCES, CULTURE, ECONOMIE, POLITIQUE, SPORT) à des dépêches journalistiques. Le programme fonctionne sur la base de lexiques par catégorie, où chaque mot est associé à un poids indiquant son importance. Le score d\'une dépêche pour une catégorie est calculé par la somme des poids des mots présents dans son lexique, la catégorie finale étant celle avec le score maximal. Ce projet s\'est déroulé en deux parties : la construction manuelle puis automatique des lexiques, et l\'évaluation de la fiabilité du système.',
        competences: [
            'Algorithmique et logique de classification',
            'Traitement de texte (parsing, extraction de mots)',
            'Conception de structures de données (lexiques, scores)',
            'Lecture et écriture de fichiers (texte, CSV)',
            'Calcul de métriques de performance (pourcentage de réponses correctes)',
            'Programmation Java'
        ],
        objectifs: 'Créer un programme de classification de texte fiable et rapide, comprendre les principes des lexiques et du calcul de scores pour la classification, et maîtriser le traitement et la structuration de données textuelles.',
        travailGroupe: 'Intégralement réalisé en binôme, avec une collaboration continue sur toutes les phases du projet.',
        techniquesAcquises: [
            'Java (ArrayList, String manipulation, Integer parsing)',
            'Algorithmes de recherche et de maximisation',
            'Découpage de texte et gestion de mots',
            'Débogage et tests unitaires de composants',
            'Gestion de la performance et de la fiabilité des algorithmes'
        ]
    }
];

// Get elements
const navLinks = document.querySelectorAll('.nav-link');
const scrollButtons = document.querySelectorAll('.scroll-button'); // Nouveau sélecteur pour les boutons de défilement
const projectsListDiv = document.getElementById('projects-list');
const projectDetailSection = document.getElementById('project-detail-section');
const backToProjectsButton = document.getElementById('back-to-projects');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Function to scroll to a specific section
function scrollToSection(id) {
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Handle navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Handle generic scroll buttons (like "Découvrir mon parcours")
scrollButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});


// Populate projects summary
function populateProjectsSummary() {
    projectsListDiv.innerHTML = ''; // Clear existing content
    projectsData.forEach(project => {
        const projectCard = `
            <div class="project-card">
                <img src="${project.image}" alt="Image du projet ${project.title}" class="project-card-image">
                <div class="project-card-content">
                    <h3 class="project-card-title">${project.title}</h3>
                    <p class="project-card-description">${project.shortDescription}</p>
                    <button data-project-id="${project.id}" class="project-card-button">
                        Voir le projet
                    </button>
                </div>
            </div>
        `;
        projectsListDiv.insertAdjacentHTML('beforeend', projectCard);
    });

    // Add event listeners to "Voir le projet" buttons
    document.querySelectorAll('.project-card-button').forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.dataset.projectId;
            displayProjectDetail(projectId);
        });
    });
}

// Display detailed project information (as an overlay)
function displayProjectDetail(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
        document.getElementById('project-detail-title').textContent = project.title;
        document.getElementById('project-detail-image').src = project.image;
        document.getElementById('project-detail-image').alt = `Image du projet ${project.title}`;
        document.getElementById('project-detail-description').textContent = project.detailedDescription;

        const competencesList = document.getElementById('project-detail-competences');
        competencesList.innerHTML = '';
        project.competences.forEach(comp => {
            const li = document.createElement('li');
            li.textContent = comp;
            competencesList.appendChild(li);
        });

        document.getElementById('project-detail-objectifs').textContent = project.objectifs;
        document.getElementById('project-detail-group-work').textContent = project.travailGroupe;

        // Handle 'Travail individuel dans le groupe' section
        const individualWorkTextElement = document.getElementById('project-detail-individual-work');
        // Assuming the h3 is the previous sibling element
        const individualWorkTitleElement = individualWorkTextElement ? individualWorkTextElement.previousElementSibling : null;

        if (project.travailIndividuel && project.travailIndividuel.trim() !== '') {
            individualWorkTextElement.textContent = project.travailIndividuel;
            if (individualWorkTitleElement) {
                individualWorkTitleElement.style.display = 'block'; // Show title
            }
            individualWorkTextElement.style.display = 'block'; // Show content
        } else {
            individualWorkTextElement.textContent = '';
            if (individualWorkTitleElement) {
                individualWorkTitleElement.style.display = 'none'; // Hide title
            }
            individualWorkTextElement.style.display = 'none'; // Hide content
        }

        // Handle 'Techniques et savoir-faire acquis' section
        const techniquesListElement = document.getElementById('project-detail-techniques');
        // Assuming the h3 is the previous sibling element
        const techniquesTitleElement = techniquesListElement ? techniquesListElement.previousElementSibling : null;

        if (project.techniquesAcquises && project.techniquesAcquises.length > 0) {
            techniquesListElement.innerHTML = ''; // Clear previous items
            project.techniquesAcquises.forEach(tech => {
                const li = document.createElement('li');
                li.textContent = tech;
                techniquesListElement.appendChild(li);
            });
            if (techniquesTitleElement) {
                techniquesTitleElement.style.display = 'block'; // Show title
            }
            techniquesListElement.style.display = 'block'; // Show content
        } else {
            techniquesListElement.innerHTML = '';
            if (techniquesTitleElement) {
                techniquesTitleElement.style.display = 'none'; // Hide title
            }
            techniquesListElement.style.display = 'none'; // Hide content
        }


        projectDetailSection.classList.add('active'); // Show the overlay
        document.body.style.overflow = 'hidden'; // Prevent scrolling of main page
    }
}

// Back to projects button handler (hide overlay)
backToProjectsButton.addEventListener('click', function() {
    projectDetailSection.classList.remove('active'); // Hide the overlay
    document.body.style.overflow = ''; // Restore scrolling of main page
});

// Handle contact form submission
contactForm.addEventListener('submit', async function(e) { // Added 'async' keyword
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    formMessage.classList.remove('text-green-600', 'text-red-600');
    formMessage.textContent = 'Envoi en cours...';
    formMessage.classList.remove('hidden');

    try {
        const response = await fetch('https://formspree.io/f/xqabegbq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json' // Important for Formspree to return JSON response
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });

        if (response.ok) {
            formMessage.textContent = 'Votre message a bien été envoyé';
            formMessage.classList.add('text-green-600');
            contactForm.reset(); // Clear the form
        } else {
            // Handle HTTP errors or Formspree specific errors
            let errorData;
            try {
                errorData = await response.json(); // Try to parse JSON error
            } catch (jsonError) {
                errorData = { message: 'Une erreur inattendue est survenue lors de la soumission.' };
            }
            console.error('Erreur Formspree:', errorData);
            formMessage.textContent = 'Échec de l\'envoi du message. Veuillez réessayer. Erreur: ' + (errorData.errors ? errorData.errors.map(err => err.message).join(', ') : errorData.message);
            formMessage.classList.add('text-red-600');
        }
    } catch (error) {
        console.error('Erreur réseau ou soumission:', error);
        formMessage.textContent = 'Échec de l\'envoi du message en raison d\'une erreur réseau.';
        formMessage.classList.add('text-red-600');
    }

    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000); // Hide message after 5 seconds
});

// Initial population of projects when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateProjectsSummary();
});
