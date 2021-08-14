const { coaches } = loadPGecom();
const { log } = console;

const displayCoachExperience = (experiences) => {
    const result = experiences.map((experience) => {
        return `
            <li>${experience}</li>
        `;
    });

    return result;
};

const modalTemplate = (coach) => {
  const {
    fullName,
    profilePictureUrl,
    country,
    experiences,
    hubspotCalendarUrl,
  } = coach;

  const modalFooter = `
        <a href="${hubspotCalendarUrl}" target="_blank" class="modal-close waves-effect waves-green btn-flat">Pran yon lè avèk coach lan</a>
    `;

  const modalContent = `
        <h4>${fullName}</h4>
        <img src="${profilePictureUrl}" alt="" />
        <p><b>Country: </b>${country}</p>

        <p><b>Experiences</b>: </p>
        <ul>
            ${displayCoachExperience(experiences)}
        </ul>
    `;
  return {
    modalFooter,
    modalContent,
  };
};

const profileTemplate = (coach) => {
  const { id, fullName, profilePictureUrl, country, hubspotCalendarUrl } =
    coach;
  return `
        <li class="collection-item avatar">
            <div data-target="coach-modal" class="profile-card modal-trigger" data-id="${id}">
                <img src="${profilePictureUrl}" alt="" class="circle">
                <span class="title">${fullName}</span>
                <p>${country}<br>
                </p>
            </div>
            <a href="${hubspotCalendarUrl}" target="_blank" class="secondary-content"><i class="material-icons">schedule</i></a>
        </li>
    `;
};

const renderCoachProfiles = (coaches) => {
  const result = coaches.map((coach) => {
    return `
            <ul class="collection">
                ${profileTemplate(coach)}
            </ul>
        `;
  });

  $(".home").append(result);
  return result;
};

renderCoachProfiles(coaches);

$(document).on("click", ".profile-card", function () {
  const coachId = $(this).attr("data-id");
  const coach = getCoachById(coachId);

  const { modalContent, modalFooter } = modalTemplate(coach);
  $(".modal-content").html(modalContent);
  $(".modal-footer").html(modalFooter);
});

$(document).ready(function () {
  $(".modal").modal();
});

const getCoachById = (id) => {
  const currentCoach = coaches.find((coach) => {
    return coach.id === id;
  });

  return currentCoach;
};
