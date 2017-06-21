export const selecLibrary = (libraryId) => {
  return {
    type: 'select_library', 
    payload: libraryId
  };
};
