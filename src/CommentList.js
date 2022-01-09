import React from 'react';

const CommentList = ({ comments }) => {
  // const [comments, setComments] = useState([]);

  // const fecthData = async () => {
  //     const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
  //     setComments(res.data);
  // }

  // useEffect(() => {
  //     fecthData();
  // }, []);

  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === 'approved') {
      content = comment.content;
    }
    if (comment.status === 'pending') {
      content = 'This comment is awaiting moderations';
    }
    if (comment.status === 'rejected') {
      content = 'This comment is rejected';
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
