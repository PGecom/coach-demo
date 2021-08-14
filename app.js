const { coaches } = loadPGecom();

let listCoach = coaches || [];

const addCoach = (coach) => {
    listCoach.push(coach);
    addCoachToStorage(coach);
    alert('Coach added!');
    return listCoach;
};

const deleteCoachById = (id) => {
    const results = listCoach.filter((coach, index) => {
        return coach.id !== id;
    });

    listCoach = results;
    log('New Coach: ', listCoach);
    deleteCoachFromStorageById(id);

    renderCoachTable(listCoach);
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
    localStorage.setItem('pgecom', JSON.stringify(pgecom));
    renderCoachTable(listCoach);
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

    addCoach(coach);
});


// Display Tables

const renderCoachTable = (coaches) => {
    log('Coaches: ', coaches);
    $('tbody').empty();
    const results = coaches.map(({ id, fullName, country, hubspotCalendarUrl, isPGecomStaff }, index) => {
        const tr = `
            <tr>
                <td>
                    <a href="${id}">${index + 1}</a>
                </td>
                <td>${fullName}</td>
                <td>${country}</td>
                <td>
                    <a href="${hubspotCalendarUrl}">Coach Calendar</a>
                </td>
                <td>${isPGecomStaff}</td>
                <td>
                    <button class="btn btn-danger delete-coach" data-id="${id}">Delete</button>
                </td>
            </tr>
        `;

        return tr;
    });

    $('tbody').append(results);
    return results;
};

renderCoachTable(coaches);


$('#delete-all-coaches').on('click', deleteAllCoach);;
$(document).on('click', '.delete-coach', function() {
    const coachId = $(this).attr('data-id');
    deleteCoachById(coachId);
});