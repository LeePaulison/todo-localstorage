import { useState, useEffect } from "react";
import { useLoaderData, Form, useNavigate } from "react-router-dom";
// draft-js
import { EditorState, convertToRaw, ContentState } from "draft-js";
// react-draft-wysiwyg
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../assets/css/editor.css";

const toolbarOptions = {
  options: ["inline", "blockType", "fontSize", "fontFamily", "list", "textAlign", "remove", "history"],
};

export const Edit = () => {
  const { todo } = useLoaderData();
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (_editorState) => {
    setEditorState(_editorState);
  };

  useEffect(() => {
    if (todo.description) {
      const blocksFromHtml = htmlToDraft(todo.description);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [todo.description]);

  return (
    <>
      {todo && (
        <Form method='post'>
          <div className='card'>
            <div className='card-header'>Edit To Do </div>
            <div className='flex flex-col card-body'>
              <label htmlFor='title'>Title</label>
              <input
                id='title'
                type='text'
                defaultValue={todo.title}
                name='title'
                className='bg-none'
                placeholder='Enter To Do Title'
              />
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
              <input
                type='hidden'
                name='description'
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
              />
            </div>
            <div className='card-footer flex justify-end gap-4'>
              <button className='btn-submit' type='submit' role='button'>
                Save
              </button>
              <button className='btn' role='button' onClick={() => navigate("..", { relative: "path" })}>
                Cancel
              </button>
            </div>
          </div>
        </Form>
      )}
    </>
  );
};
