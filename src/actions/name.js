export const UPDATE_NAME = 'UPDATE_NAME';

export function update ( name ) {
  return { type: UPDATE_NAME, name };
};
