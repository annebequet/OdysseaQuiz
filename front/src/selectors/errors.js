import React from 'react';

export const failEmail = (email) => {
  if (!email) {
    return { email: 'Entrez un email' };
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return { email: 'Entrez un email valide' };
  }
  return { email: '' };
};

export const failPassword = (password) => {
  if (!password) {
    return { password: 'Entrez un mot de passe' };
  }
  if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,32}$/i.test(password)) {
    return { password: 'Votre mot de passe doit contenir au moins 6 caractères, dont 1 minuscule, 1 majuscule et 1 chiffre.' };
  }
  return { password: '' };
};

export const failPseudo = (pseudo) => {
  if (!pseudo) {
    return { pseudo: 'Entrez un pseudo' };
  }
  if (pseudo.length < 6) {
    return { pseudo: 'Entrez un pseudo d\'au moins 6 caractères' };
  }
  if (pseudo.length > 12) {
    return { pseudo: 'Entrez un pseudo de moins de 12 caractères' };
  }
  return { pseudo: '' };
};

export const Normalizer = (errors) => {
  let key;
  let txt;
  const list = [];
  console.log(errors);

  for (key in errors) {
    txt = errors[key];
    list.push(<li className="errorList" key={key}>
      {key} :
      <ul>
        {txt.map((errorMessage) => <li className="errorListLi" key={errorMessage}>{errorMessage}</li>)}
      </ul>
    </li>);
  }

  return list;
};
