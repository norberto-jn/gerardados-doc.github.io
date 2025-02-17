document.getElementById('documentation-link').addEventListener('click', function () {
    gtag('event', 'click_documentation_link', {
        'event_category': 'engagement',
        'event_label': 'Clique no link da documentação.'
    });
    open('https://docs.google.com/forms/d/e/1FAIpQLScGc9yMlu8t3eEDIoFPs8lbSjaGcRjQb_Od4aHtUcNWtT7ilw/viewform', '_blank');
})
document.getElementById('profile-linkedin-link').addEventListener('click', function () {
    gtag('event', 'click_profile_linkedin_link', {
        'event_category': 'engagement',
        'event_label': 'Clique no link do perfil no LinkedIn.'
    });

    open('https://www.linkedin.com/in/norberto-jn/', '_blank');

})

document.getElementById('documentation-link').addEventListener('mouseover', function () {
    gtag('event', 'mouseover_documentation_link', {
        'event_category': 'engagement',
        'event_label': 'Mouseover no link da documentação.'
    })
})

document.getElementById('profile-linkedin-link').addEventListener('mouseover', function () {
    gtag('event', 'mouseover_profile_linkedin_link', {
        'event_category': 'engagement',
        'event_label': 'Mouseover no link do perfil no LinkedIn.'
    });
})