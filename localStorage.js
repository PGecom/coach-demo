/*
    Example Data Structure

    const pgecom = {
        coaches: []
    };

*/

const pgecom = {
    coaches: []
};

const loadPGecom = () => {
    const pgecomObj = localStorage.getItem('pgecom');
    const obj = JSON.parse(pgecomObj);

    return obj || pgecom;
};

const addCoachToStorage = (coach) => {
    const pgecom = loadPGecom(); 

    pgecom.coaches.push(coach);

    localStorage.setItem('pgecom', pgecom);
    return pgecom;
};

const listCoachFromStorage = () => {
    const { coaches } = loadPGecom();
    return coaches;
};

const deleteCoachFromStorageById = (id) => {
    const pgecom = loadPGecom();
    const { coaches } = pgecom;

    const results = coaches.filter((coach, index) => {
        return coach.id !== id;
    });

    pgecom.coaches = results;

    localStorage.setItem('pgecom');

    return pgecom;
};

const updateCoachFromStorageById = (id, obj) => {
    const pgecom = loadPGecom();
    const { coaches } = pgecom;

    const results = coaches.map((coach) => {
        return {
            ...coach,
            ...obj
        }
    });

    pgecom.coaches = results;
    localStorage.setItem('pgecom', pgecom);

    return pgecom;
};