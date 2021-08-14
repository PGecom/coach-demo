const log = console.log;
const slackInvitationLink = 'https://join.slack.com/t/slack-pbf1799/shared_invite/zt-sqzsksa9-CtA8BZSZ6E3FRQLd32oSYg';

const loginToAdminButton = $('#admin-login');

const websiteAccessCodes = [
    'demo',
    'steven-experience',
    'fedy-crypto',
    'zachary-journey',
    'sertyl-expert'
];

// Generate the Country Selection
const createCountrySelect = (countries) => {
    const selectTemplate = `
        <div class="mb-3">
            <select class="form-select" id="country" aria-label="Default select example">
                <option selected>Dominican Republic</option>
                ${createCountryOptions(countries)}
            </select>
        </div>
    `;

    return selectTemplate;
}

const createCountryOptions = (countries) => {
    const results = countries.map((country) => {
        return `<option value="${country}">${country}</option>`;
    });

    return results;
};

const getListCountry = () => {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/all'
    })
        .then((data) => {
            const countries = data.map(({ name }) => name);
            const selectTemplate = createCountrySelect(countries);
            $('#hubspot-calendar-section').after(selectTemplate);
        })
        .catch((error) => log('Error loading countries'));
}


const renderAdminTemplate = () => {
    $('.admin').empty();

    $('.admin').append(adminTemplate);
    getListCountry();
};

const renderNoAccessTemplate = () => {
    $('.admin').empty();

    $('.admin').append(noAccessTemplate);
};

const accessCode = loadAccessCodeFromLocalStorage();
if (accessCode) {
    renderAdminTemplate();
}

loginToAdminButton.on('click', () => {
    const promptResponse = prompt("What is your access code?");
    if (websiteAccessCodes.includes(promptResponse)) {
        addAccessCodeToLocalStorage(promptResponse);
        return renderAdminTemplate();
    }
    
    return renderNoAccessTemplate();;
});