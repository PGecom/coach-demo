/*
    Example Data Structure

    const pgecom = {
        coaches: []
    };

*/

const pgecom = {
    coaches: []
};

const addPGecomToLocalStorage = (pgecom) => {
    localStorage.setItem('pgecom', JSON.stringify(pgecom));
};


const loadPGecom = () => {
    const pgecomObj = localStorage.getItem('pgecom');
    const obj = JSON.parse(pgecomObj);

    return obj || pgecom;
};

const addCoachesToLocalStorage = (coaches) => {
    const pgecom = loadPGecom(); 

    pgecom.coaches = coaches;

    addPGecomToLocalStorage(pgecom);
    return pgecom;
};

const addAccessCodeToLocalStorage = (code) => {
    localStorage.setItem('accessCode', code);
}

const loadAccessCodeFromLocalStorage = () => {
    const accessCode = localStorage.getItem('accessCode');
    return accessCode;
}