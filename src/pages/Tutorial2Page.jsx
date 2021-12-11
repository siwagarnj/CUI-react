import TableHook from "../components-hook/common/Table";
import ModalHook from "../components-hook/common/Modal";
import { getApi, postApi, putApi, deleteApi } from "../utils/api";
import { useState } from "react";

const Tutorial2Page = () => {
  const [items, setItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmit = async (newItem) => {
    console.log(newItem);
    const res = await postApi("/users", newItem);
    console.log(res);
  };
  return (
    <>
      <ModalHook
        visiable={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
        }}
        onConfirm={onSubmit}
      />
      <TableHook
        items={items}
        onCreate={() => {
          console.log("onCreate");
          setIsModalVisible(true);
        }}
        onDelete={() => {
          console.log("onDelete");
          // do sth
        }}
        onEdit={() => {
          console.log("onEdit");
          // do sth
        }}
      />
    </>
  );
};

export default Tutorial2Page;
