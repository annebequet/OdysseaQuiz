export const failEmail = (email) => {
  if (!email) {
    return { email: ['Entrez un email'] };
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(email)) {
    return { email: 'Entrez un email valide' };
  }
  return { email: '' };
};

export const failPassword = (password) => {
  if (!password) {
    return { password: 'Entrez un mot de passe' };
  }
  if (password.length < 4) {
    return { password: 'Entrez un mot de passe d\'au moins 4 caractères' };
  }
  return { password: '' };
};

export const failPseudo = (pseudo) => {
  if (!pseudo) {
    return { pseudo: 'Entrez un pseudo' };
  }
  if (pseudo.length < 4) {
    return { pseudo: 'Entrez un pseudo d\'au moins 4 caractères' };
  }
  if (pseudo.length > 12) {
    return { pseudo: 'Entrez un pseudo de moins de 12 caractères' };
  }
  return { pseudo: '' };
};
