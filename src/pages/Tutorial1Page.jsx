import React, { Component } from "react";
import Modal from "../components/common/Modal";
import Table from "../components/common/Table";
import { getApi, postApi, putApi, deleteApi } from "../utils/api";

class Tutorial1Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isModalVisiable: false,
    };
  }

  componentDidMount() {
    // do something
  }

  async onSaveItem(newItem) {
    console.log("onSaveItem => ", newItem);
    const res = await postApi("/users", newItem);
    console.log(res);
    this.setState({
      items: [
        ...this.state.items,
        {
          name: newItem.name,
          surname: newItem.surname,
          email: newItem.email,
          gender: newItem.gender,
          phoneNumber: newItem.phoneNumber,
        },
      ],
      isModalVisiable: false,
    });
  }

  render() {
    return (
      <>
        <Modal
          visiable={this.state.isModalVisiable}
          onClose={() => {
            this.setState({ isModalVisiable: false });
          }}
          onSave={(newItem) => this.onSaveItem(newItem)}
        />
        <Table
          items={this.state.items}
          onCreate={() => {
            console.log("onCreate");
            this.setState({ isModalVisiable: true });
            // do something
            this.setState({
              items: [
                ...this.state.items,
                // {
                //   no: this.state.items.length + 1,
                //   name: "hello",
                //   surname: "world",
                //   email: "g@mail.com",
                //   gender: "male",
                //   phoneNumber: "0800000000",
                // },
              ],
            });
          }}
          onDelete={(item) => {
            console.log("onDelete => ", item);
            // do something
          }}
          onEdit={(item) => {
            console.log("onEdit =>", item);
            this.setState({ isModalVisiable: true });
            // do something
          }}
        />
      </>
    );
  }
}

export default Tutorial1Page;
