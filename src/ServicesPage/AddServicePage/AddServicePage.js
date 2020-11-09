import React from "react";
import TokenService from "../../Utils/TokenService";
import "./AddServicePage.css";

class AddServicePage extends React.Component {
  navHome = () => {
    this.props.history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { service, description } = e.target;
    const newService = {
      name: service.value,
      description: description.value,
    };

    if (newService) {
      fetch("https://fast-springs-85853.herokuapp.com/api/services", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(newService),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          } else {
            alert("Service added.");
          }
        })
        .catch((e) => alert(e));
    }
  };

  render() {
    return (
      <div className="add-serv-cont">
        <section className="add-serv-page">
          <h2>Add Service</h2>
          <form className="add-serv-form" onSubmit={this.handleSubmit}>
            <label htmlFor="service">Service</label>
            <input type="text" name="service" id="service" required></input>

            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              cols={50}
              rows={10}
              required
            ></textarea>
            <button type="submit">Add</button>
            <button type="button" onClick={this.navHome}>
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default AddServicePage;
