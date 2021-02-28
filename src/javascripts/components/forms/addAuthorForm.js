const addAuthor = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="first-name" placeholder="Enter First Name" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="last-name" placeholder="Enter Last Name" required>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;
};

export default addAuthor;
