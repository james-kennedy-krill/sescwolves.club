/**
 * hasRole
 * takes an array of strings (roles) and checks if a role (or roles) are contained
 * within that array of roles.
 * @param userRoles string[]
 * @param rolesToCheck string | string[]
 * @returns boolean
 */
const hasRole = (userRoles: string[], rolesToCheck: string | string[]): boolean => {
  if (Array.isArray(rolesToCheck)) {
    const set = new Set(userRoles);
    for (const role of rolesToCheck) {
      if (set.has(role)) {
        return true;
      }
    }
    return false;
  }

  return userRoles.includes(rolesToCheck as string);
}

export { hasRole };
