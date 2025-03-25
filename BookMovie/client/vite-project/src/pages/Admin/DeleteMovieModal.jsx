import { Modal, message } from 'antd';
import { deleteMovie } from '../../apiCalls/movies'
import { showLoading, hideLoading } from "../../redux/loaderSlice";
import { useDispatch } from 'react-redux';

const DeleteMovieModal = ({isDeleteModalOpen, setIsDeleteModalOpen, selectedMovie, setSelectedMovie, getData}) => {
    const dispatch =  useDispatch()
    const handleOk = async () => {
        try{
            dispatch(showLoading());
            const movieId = selectedMovie._id;
            const response = await deleteMovie({ movieId });
          
            if(response.success){
              console.log("id and respone ->  " , movieId, response);
                message.success(response.message);
                getData();
            }else{
                message.error(response.message);
                setSelectedMovie(null);
            }
            setIsDeleteModalOpen(false);
            dispatch(hideLoading());
            
        }catch(err){
            dispatch(hideLoading());
            setIsDeleteModalOpen(false)
            message.error(err.messagae);
        }        
    };
  const handleCancel = () => {
    setIsDeleteModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <Modal title="Delete Movie?" open={isDeleteModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p className='pt-3 fs-18'>Are you sure you want to delete this movie?</p>
            <p className='pb-3 fs-18'>This action can't be undone and you'll lose this movie data.</p>
      </Modal>
    </>
  );
};

export default DeleteMovieModal;