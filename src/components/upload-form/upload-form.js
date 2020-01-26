import React, {useRef} from "react";
import upload from "../../fetch-api/fetch-api";
import PropTypes from 'prop-types'

const UploadForm = ({onUploadHandler}) => {

  const inputRef = useRef(null);

  const _onSuccess = (data) => {
    onUploadHandler(data.link);
  };

  const _onFailure = () => {
    onUploadHandler(null);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    upload(inputRef.current.files[0], _onSuccess, _onFailure);
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="file"
        ref={inputRef}
      />
      <button
        type='submit'
      >Upload</button>
    </form>
  )
};
UploadForm.propTypes = {
  onUploadHandler: PropTypes.func.isRequired
};

export default UploadForm;