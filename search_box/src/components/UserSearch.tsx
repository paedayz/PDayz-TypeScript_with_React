import React, { Component } from "react";
import axios from "axios";

// Importing Interfaces
import { IUserSearch } from "../interfaces/UserSearchInterface";

interface IUserSearchState {
  curent_search_str: string;
  searched_str: string;
}

class UserSearch extends Component<IUserSearch, IUserSearchState> {
  constructor(props: IUserSearch) {
    super(props);
    this.state = {
      curent_search_str: "",
      searched_str: "",
    };
  }

  onChangeText(val: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ curent_search_str: val.currentTarget.value });
  }

  onButtonClicked(): void {
    this.setState({ searched_str: this.state.curent_search_str });
  }

  render() {
    // Destructoring
    const { limitation, username } = this.props;

    return (
      <div>
        <h2>Welcome back to our website {username}</h2>
        <h2>User Search Component</h2>
        <span>You can only search {limitation} times for today</span>
        <br />
        <br />
        <input type="text" onChange={this.onChangeText.bind(this)} />
        <button type="button" onClick={this.onButtonClicked.bind(this)}>
          Search
        </button>
        <p>{this.state.searched_str}</p>
      </div>
    );
  }
}

export default UserSearch;
