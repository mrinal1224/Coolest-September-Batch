
import { Modal, message } from "antd";
import { deleteTheatre } from "../../apiCalls/theatres";
import { showLoading, hideLoading } from "../../redux/loaderSlice";
import { useDispatch } from "react-redux";

const DeleteTheatreModal = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  selectedTheatre,
  setSelectedTheatre,
  getData,
}) => {
  const dispatch = useDispatch();
  const handleOk = async () => {
    try {
      dispatch(showLoading);
      const theatreId = selectedTheatre._id;
      const response = await deleteTheatre({ theatreId });
      console.log(theatreId, response);
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
        setSelectedTheatre(null);
      }
      setIsDeleteModalOpen(false);
      dispatch(hideLoading);
    } catch (err) {
      dispatch(hideLoading);
      setIsDeleteModalOpen(false);
      message.error(err.messagae);
    }
  };
  const handleCancel = () => {
    setIsDeleteModalOpen(false);
    setSelectedTheatre(null);
  };

  return (
    <>
      <Modal
        title="Delete Theatre?"
        open={isDeleteModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="pt-3 fs-18">
          Are you sure you want to delete this theatre?
        </p>
        <p className="pb-3 fs-18">
          This action can't be undone and you'll lose this theatre data.
        </p>
      </Modal>
    </>
  );
};

export default DeleteTheatreModal;
