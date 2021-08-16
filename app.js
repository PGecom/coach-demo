const origin = window.location.origin;
const { coaches } = loadPGecom();
let listCoach = coaches || [];

const getCoach = async () => {
    try {
        const options = {
            url
        };
        const coaches = await $.ajax(options);
        addCoachesToLocalStorage(coaches);
        listCoach = coaches;
        return {
            isError: false,
            coaches
        }
    } catch (error) {
        return {
            isError: true,
            coaches: []
        }
    }
};

// Initialize Coach
getCoach()
    .then(({ coaches }) => {
        renderCoachTable(coaches);
        log('New coaches loaded!!');
    })

if (listCoach.length) {
    return renderCoachTable(listCoach);
}

const addCoach = async (coach) => {
    try {
        const options = {
            url,
            method: 'POST',
            contentType: "application/json",
            data: JSON.stringify(coach)
        };
        await $.ajax(options);
        return {
            isError: false,
            coaches: []
        }
    } catch (error) {
        log('Error: ', error);
        return {
            isError: true,
            coaches: []
        }
    }
};

const deleteCoachById = async (id) => {
    try {
        const options = {
            url: `${url}?id=${id}`,
            method: 'DELETE'
        };
        await $.ajax(options);
        const { coaches } = await getCoach();
        log('Coaches - Delete: ', coaches);
        renderCoachTable(coaches);
        return {
            isError: false,
            coaches
        }
    } catch (error) {
        log('Error: ', error);
        return {
            isError: true,
            coaches: []
        }
    }
};

const updateCoachById = async (id, payload) => {
    try {
        const options = {
            url: `${url}?id=${id}`,
            method: 'PUT',
            data: payload
        };
        await $.ajax(options);
        const { coaches } = await getCoach();
        return {
            isError: false,
            coaches
        }
    } catch (error) {
        return {
            isError: true,
            coaches: []
        }
    }
};

const deleteAllCoach = async () => {
    try {
        const options = {
            url,
            method: 'DELETE'
        };
        await $.ajax(options);
        const { coaches } = await getCoach();
        renderCoachTable(coaches);
        return {
            isError: false,
            coaches
        }
    } catch (error) {
        return {
            isError: true,
            coaches: []
        }
    }
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

    addCoach(coach);
});


// Display Tables
const renderCoachTable = (coaches) => {
    $('tbody').empty();
    const results = coaches.map((coach, index) => generateTablTr(coach, index));

    $('tbody').append(results);
    return results;
};

const generateTablTr = (coach, index) => {
    const { _id, fullName, country, hubspotCalendarUrl, isPGecomStaff } = coach;
    const tr = `
        <tr>
            <td>
                <a href="${_id}">${index + 1}</a>
            </td>
            <td>${fullName}</td>
            <td>${country}</td>
            <td>
                <a href="${hubspotCalendarUrl}">Coach Calendar</a>
            </td>
            <td>${isPGecomStaff}</td>
            <td>
                <button class="btn btn-danger delete-coach" data-id="${_id}">Delete</button>
            </td>
        </tr>
    `;
    return tr;
}

$('#delete-all-coaches').on('click', deleteAllCoach);;
$(document).on('click', '.delete-coach', function() {
    log('Deleting...');
    const coachId = $(this).attr('data-id');
    log('Coach ID: ', coachId);
    deleteCoachById(coachId);
});