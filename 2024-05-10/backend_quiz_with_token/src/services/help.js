export function userToView(user) {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    bio: user.bio,
  };
}
