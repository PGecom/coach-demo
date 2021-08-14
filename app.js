/*

{
        id: '',    
        fullName: 'Fedy Jean',
        profilePictureUrl: '',
        country: '',
        experiences: [],
        isPGecomStaff: true,
        contactOnSlack: '',
        createdWith: '',
        hubSpotCalendarUrl: ''
    }
*/
// Elements

// Features

const { coaches } = loadPGecom();

const listCoach = [...coaches];

const addCoach = (coach) => {
    listCoach.push(coach);
    addCoachToStorage(coach);
    return listCoach;
};

const deleteCoachById = (id) => {
    const results = listCoach.filter((coach, index) => {
        return coach.id !== id;
    });

    listCoach = results;
    deleteCoachFromStorageById(id);

    return listCoach;
};

const updateCoachById = (id, obj) => {
    const results = listCoach.map((coach) => {
        return {
            ...coach,
            ...obj
        }
    });

    listCoach = results;
    updateCoachFromStorageById(id, obj);

    return listCoach;
};

const deleteAllCoach = () => {
    listCoach = [];
    const pgecom = loadPGecom();

    pgecom.coaches = [];
    localStorage.setItem('pgecom');
};

// Handle Forms
$('form').on('submit', (event) => {
    event.preventDefault();
    const fullName = $('#fullName').val();
    const profilePictureUrl = $('#profilePictureUrl').val();
    const email = $('#inputEmail').val();
    const hubspotCalendarUrl = $('#hubspotCalendarUrl').val();
    const isPGecomStaff = $('#isPGecomStaff').val();
    const country = $('#country').val();
    const createdWith = localStorage.getItem('accessCode');
    const experiences = [];

    // Select all the checkboxes
    $('input[type=checkbox]:checked').each(function(i){
        log('Item: ', i);
        log('Val: ', $(this));
        experiences[i] = $(this).val();
    });

    const coach = {
        id: uuid.v4(),    
        fullName,
        email,
        profilePictureUrl,
        country,
        experiences,
        isPGecomStaff,
        contactOnSlack: slackInvitationLink,
        createdWith,
        hubspotCalendarUrl
    };

    log('Coach Data: ', coach);

    // addCoach(coach);

    log('Submit Event Fired');
});
