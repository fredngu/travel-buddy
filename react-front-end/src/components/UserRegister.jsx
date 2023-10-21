import React from "react";
// import "../styles/UserRegister.scss"; <-doesn't exist yet

function UserRegister() {
  return (
    <div class="UserRegisterForm">
      <h1>Register User</h1>
      <form class="row g-3">
        <div class="col-md-12">
          <label for="user_id" class="form-label">
            User Id
          </label>
          <input
            class="form-control"
            id="user_id"
            placeholder="Pick a number between 1 and 10"
          />
        </div>
        <br />

        <div class="col-md-6">
          <label for="firstName" class="form-label">
            First Name
          </label>
          <input class="form-control" id="firstName" placeholder="Roberta" />
        </div>

        <div class="col-md-6">
          <label for="lastName" class="form-label">
            Last Name
          </label>
          <input class="form-control" id="lastName" placeholder="Bondar" />
        </div>

        <div class="col-md-12">
          <label for="email" class="form-label">
            Email Address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="cool_person99@courrier.com"
          />
        </div>

        <div class="col-12">
          <label for="sub_id" class="form-label">
            Sub ID
          </label>
          <input
            type="text"
            class="form-control"
            id="sub_id"
            placeholder="Pick ANOTHER number 1-10"
          />
        </div>

        <div class="col-md-6">
          <label for="home" class="form-label">
            Home City
          </label>
          <select id="home" class="form-select">
            <option selected>Choose a city</option>
            <option>Toronto</option>
            <option>Calgary</option>
            <option>Vancouver</option>
          </select>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserRegister;
