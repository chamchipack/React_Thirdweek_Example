import { set } from "lodash";
import React from "react";
import { actionCreators as commentActions } from "../redux/modules/comment";
import {Grid, Input, Button} from "../elements";
import {useDispatch, useSelector} from "react-redux";

const CommentWrite = (props) => {
    const dispatch = useDispatch();
    const [comment_text, setCommentText ] = React.useState();
    const {post_id} = props;
    const onChange = (e) => {
      setCommentText(e.target.value);
    }

    const write = () => {
      if (comment_text === "") {
        window.alert("Leave a comment");
        return;
      }
      // 입력된 텍스트는 지우기!
      setCommentText("");
  
      // 파이어스토어에 추가합니다.
      dispatch(commentActions.addCommentFB(post_id, comment_text));
    };
  
    return (
      <React.Fragment>
        <Grid padding="16px" is_flex>
          <Input
            placeholder="Leave a comment here"
            _onChange={onChange}
            value={comment_text}
            onSubmit={write}
            is_submit
          />
          <Button width="50px" margin="0px 2px 0px 2px" _onClick={write}>
            Submit
          </Button>
        </Grid>
      </React.Fragment>
    );
  };
  
  CommentWrite.defaultProps = {
    post_id: "",
  };
  
  export default CommentWrite;