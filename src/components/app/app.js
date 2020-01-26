import React, {useState} from "react";
import UploadForm from "../upload-form/upload-form";
import List from "../list/list";
import Status from "../status/status";

const App = () => {

  const [paths, setPath] = useState([]);
  const [message, setMessage] = useState('');

  const onUploadHeandler = (path) => {
    if (path) {
      setPath(paths.concat(path));
      setMessage('Done');
    } else {
      setMessage('Fail')
    }
  };

  return (
    <div>
      <UploadForm onUploadHandler={onUploadHeandler}/>
      <List data={paths}/>
      <Status message={message}/>
    </div>
  )
};

export default App;