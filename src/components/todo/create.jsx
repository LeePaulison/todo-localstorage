import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
// draft-js
import { EditorState, convertToRaw } from "draft-js";
// react-draft-wysiwyg
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../assets/css/editor.css";

const toolbarOptions = {
  options: ["inline", "blockType", "fontSize", "fontFamily", "list", "textAlign", "remove", "history"],
};

export const Create = () => {
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (_editorState) => {
    setEditorState(_editorState);
  };

  return (
    <Form method='post'>
      <div className='card'>
        <div className='card-header'>Create To Do </div>
        <div className='flex flex-col card-body'>
          <label htmlFor='title'>Title</label>
          <input id='title' type='text' name='title' className='bg-none' placeholder='Enter To Do Title' />
          <label htmlFor='description'>Description</label>
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            wrapperClassName='wrapper-class'
            editorClassName='editor-class'
            toolbarClassName='toolbar-class'
            toolbar={toolbarOptions}
            placeholder='Enter To Do Description'
          />
          <input type='hidden' name='description' value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} />
        </div>
        <div className='card-footer flex gap-4 justify-end'>
          <button type='submit' className='btn-submit' role='button'>
            Save
          </button>
          <button role='button' className='btn' onClick={() => navigate("..", { relative: "path" })}>
            Cancel
          </button>
        </div>
      </div>
    </Form>
  );
};
