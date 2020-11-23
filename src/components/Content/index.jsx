import React, { Component } from "react";
import "./Content.scss";
import queryString from "query-string";
import { pick } from "lodash";
import Top from "../Top";
import Search from "../Search";
import Counters from "./GroupedLists/Couters";
import applicantsData from "../../data/applicants.json";
import GroupedLists from "./GroupedLists";
import Loading from "../Loading";

class Content extends Component {
  static groupApplicants(applicantsResponse) {
    const groupedApplicants = {
      Appointment_Set: [],
      Property_Viewed: [],
      Interested: [],
      Offer_Accepted: [],
    };
    applicantsResponse.map((a) => {
      return groupedApplicants[a.status].push(a);
    });

    return groupedApplicants;
  }

  constructor() {
    super();
    this.state = {
      applicants: applicantsData,
      loaded: false,
      failed: false,
      search: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { applicants } = this.state;
    const { location } = this.props;

    setTimeout(() => {
      this.setState({ applicants: applicantsData, loaded: true });
    }, 2000);
    this.constructor.groupApplicants(applicants);

    const queryObj = queryString.parse(location.search);

    const queryStr = queryObj.search;
    console.log("QuerySTrRr:", queryStr);
    if (queryStr) this.setState({ search: queryStr });
  }

  handleClick() {
    this.setState({ failed: false });
  }

  handleChange(e) {
    const { value } = e.target;
    const { history } = this.props;
    this.setState({ search: value });

    if (value !== "") {
      history.push(`/page/?search=${value}`);
    } else {
      history.push(`/page/`);
    }
  }

  render() {
    const { applicants, loaded, failed, search } = this.state;

    let groups;

    if (search === "") groups = this.constructor.groupApplicants(applicants);
    else {
      const filtered = applicants.filter((obj) => {
        const fields = pick(obj, ["firstName", "lastName", "email"]);
        return Object.keys(fields).some((key) => {
          return obj[key].match(new RegExp(search, "i"));
        });
      });
      groups = this.constructor.groupApplicants(filtered);
    }

    if (failed) {
      return (
        <div className="content">
          <Top />
          <div className="failed">
            <h4>Something went wrong while loading Applicants</h4>
            <button
              className="btn btn-warning btn-lg"
              onClick={this.handleClick.bind(this)}
              type="button"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="content">
        <div className="head">
          <div>
            <Top />
            <Search value={search} change={this.handleChange} />
          </div>
          <div className="applicants-count">
            <Counters
              total={applicants.length}
              viewed={groups.Property_Viewed.length}
              appointment={groups.Appointment_Set.length}
            />
          </div>
        </div>
        {loaded ? <GroupedLists data={groups} /> : <Loading />}
      </div>
    );
  }
}

export default Content;
